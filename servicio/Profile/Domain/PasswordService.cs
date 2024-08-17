namespace servicio.Profile.Domain;
public interface PasswordService
{
    string HashPassword(string password);
    bool VerifyPassword(string password, string hashedPassword);
}