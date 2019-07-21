using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SmartWallet.Api.Application.Users;

namespace SmartWallet.Api.Infrastructure.JwtTokens
{
    public class JwtTokenService : IJwtTokenService
    {
        private static readonly List<JwtRefreshToken> JwtRefreshTokens = new List<JwtRefreshToken>();

        private readonly JwtConfiguration _jwtConfiguration;

        public JwtTokenService(IOptions<JwtConfiguration> jwtSettings)
        {
            _jwtConfiguration = jwtSettings.Value;
        }

        public string CreateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                }),
                Expires = DateTime.UtcNow.AddMinutes(_jwtConfiguration.AccessExpireMinutes),
                NotBefore = DateTime.UtcNow,
                Issuer = _jwtConfiguration.Issuer,
                Audience = _jwtConfiguration.Audience,
                SigningCredentials = new SigningCredentials(_jwtConfiguration.IssuerSigningKey, SecurityAlgorithms.HmacSha256Signature)
            };
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(securityToken);

            return token;
        }

        public JwtRefreshToken GenerateRefreshToken(User user)
        {
            var randomNumber = new byte[32];
            string token;
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                token = Convert.ToBase64String(randomNumber);
            }

            return new JwtRefreshToken(token, DateTime.UtcNow.AddMinutes(_jwtConfiguration.RefreshExpireMinutes), user.Id);
        }

        public int GetUserIdFromExpiredToken(string token)
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                ValidIssuer = _jwtConfiguration.Issuer,
                ValidAudience = _jwtConfiguration.Audience,
                IssuerSigningKey = _jwtConfiguration.IssuerSigningKey,
                ValidateLifetime = false //here we should turn off validate life time since in most cases this method needed refresh expired token
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out var securityToken);
            if (!(securityToken is JwtSecurityToken jwtSecurityToken) ||
                !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            {
                throw new SecurityTokenException("Invalid token");
            }

            var userClaim = principal.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            if (userClaim == null)
                throw new SecurityTokenException("Invalid token");
            var userId = Convert.ToInt32(userClaim);

            return userId;
        }

        public Task<JwtRefreshToken> GetRefreshTokenAsync(int userId, string refreshToken)
        {
            return Task.FromResult(JwtRefreshTokens.FirstOrDefault(x => x.UserId == userId && x.Token == refreshToken));
        }

        public Task AddRefreshTokenAsync(JwtRefreshToken jwtRefreshToken)
        {
            JwtRefreshTokens.Add(jwtRefreshToken);
            return Task.CompletedTask;
        }

        public Task RemoveRefreshTokenAsync(JwtRefreshToken jwtRefreshToken)
        {
            var token = JwtRefreshTokens.FirstOrDefault(x =>
                x.UserId == jwtRefreshToken.UserId && x.Token == jwtRefreshToken.Token);
            JwtRefreshTokens.Remove(token);
            return Task.CompletedTask;
        }
    }
}