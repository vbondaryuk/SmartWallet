using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartWallet.Api.Application.Users;
using SmartWallet.Api.Infrastructure.AuthenticationManagers;
using SmartWallet.Api.Infrastructure.JwtTokens;

namespace SmartWallet.Api.Controllers
{
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationManager _authenticationManager;

        public AuthController(IAuthenticationManager authenticationManager)
        {
            _authenticationManager = authenticationManager;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginDto loginDto)
        {
            var jwtToken = await _authenticationManager.Authenticate(loginDto);

            if (jwtToken == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(jwtToken);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] CreateUserDto createUserDto)
        {
            var jwtToken = await _authenticationManager.RegisterAsync(createUserDto);

            if (jwtToken == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(jwtToken);
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] JwtToken jwtToken)
        {
            jwtToken = await _authenticationManager.RefreshToken(jwtToken);

            return Ok(jwtToken);
        }
    }
}