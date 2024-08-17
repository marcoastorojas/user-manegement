namespace servicio.Profile.Domain;

using System;
using System.Text.RegularExpressions;

public class UserEmail
{
    private static readonly Regex EmailRegex = new Regex(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        RegexOptions.Compiled | RegexOptions.IgnoreCase);

    public string Value { get; private set; }

    public UserEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
        {
            throw new ArgumentException("La dirección de correo electrónico no puede estar vacía.", nameof(email));
        }

        if (!IsValidEmail(email.Trim()))
        {
            throw new ArgumentException("Dirección de correo electrónico no válida.", nameof(email));
        }

        Value = email;
    }

    private static bool IsValidEmail(string email)
    {
        return EmailRegex.IsMatch(email);
    }

}
