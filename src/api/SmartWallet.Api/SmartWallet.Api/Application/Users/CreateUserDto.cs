﻿namespace SmartWallet.Api.Application.Users
{
    public class CreateUserDto
    {
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }

        public string InviteCode { get; set; }
    }
}