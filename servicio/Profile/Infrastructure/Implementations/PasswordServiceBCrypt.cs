using servicio.Profile.Domain;

namespace servicio.Profile.Infrastructure.Implementations;
using BCrypt.Net;

public class PasswordServiceBCrypt : PasswordService
{
    public string HashPassword(string password)
    {
        return  BCrypt.HashPassword(password);
    }

    public bool VerifyPassword(string password, string hashedPassword)
    {
        return BCrypt.Verify(password, hashedPassword);
    }
}