using System.Threading.Tasks;
using SmartWallet.Api.Application.Users;
using SmartWallet.Api.Infrastructure.JwtTokens;

namespace SmartWallet.Api.Infrastructure.AuthenticationManagers
{
    public interface IAuthenticationManager
    {
        Task<JwtToken> Authenticate(LoginDto loginDto);
        Task<User> GetCurrentUser();
        Task<JwtToken> RegisterAsync(CreateUserDto createUserDto);
        Task<JwtToken> RefreshToken(JwtToken jwtToken);
    }
}