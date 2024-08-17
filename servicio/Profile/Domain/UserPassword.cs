namespace servicio.Profile.Domain;
using System.Text.RegularExpressions;

public partial class UserPassword
{
    private readonly string Value;


    public UserPassword(string password)
    {
        if (string.IsNullOrWhiteSpace(password))
            throw new ArgumentException("La contraseña no puede estar vacía.");

        if (password.Length < 5)
            throw new ArgumentException("La contraseña debe tener al menos 5 caracteres.");

        if (!PasswordRegex().IsMatch(password))
            throw new ArgumentException("La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un carácter especial.");

        Value = password;
    }

    [GeneratedRegex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$")]
    private static partial Regex PasswordRegex();
}