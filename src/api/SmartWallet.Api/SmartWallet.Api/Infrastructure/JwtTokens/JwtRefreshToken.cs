using System;

namespace SmartWallet.Api.Infrastructure.JwtTokens
{
    public class JwtRefreshToken
    {
        public JwtRefreshToken(string token, DateTime expires, int userId)
        {
            Token = token;
            Expires = expires;
            UserId = userId;
        }

        public string Token { get; }
        public DateTime Expires { get; }
        public int UserId { get; }
    }
}