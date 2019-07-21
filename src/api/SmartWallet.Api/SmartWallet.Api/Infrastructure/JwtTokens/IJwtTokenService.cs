using System.Threading.Tasks;
using SmartWallet.Api.Application.Users;

namespace SmartWallet.Api.Infrastructure.JwtTokens
{
    public interface IJwtTokenService
    {
        string CreateToken(User user);
        JwtRefreshToken GenerateRefreshToken(User user);
        Task<JwtRefreshToken> GetRefreshTokenAsync(int userId, string refreshToken);
        int GetUserIdFromExpiredToken(string token);
        Task AddRefreshTokenAsync(JwtRefreshToken jwtRefreshToken);
        Task RemoveRefreshTokenAsync(JwtRefreshToken jwtRefreshToken);
    }
}