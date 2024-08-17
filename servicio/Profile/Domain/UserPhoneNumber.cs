namespace servicio.Profile.Domain;

using System.Text.RegularExpressions;
public partial class UserPhoneNumber
{
    private static readonly Regex PhoneNumberRegex = PhoneRegex();

    public string Value { get; private set;}

    public UserPhoneNumber(string number)
    {
        if (string.IsNullOrWhiteSpace(number))
        {
            throw new ArgumentException("El número de teléfono no puede estar vacío.", nameof(number));
        }

        if (!IsValidPhoneNumber(number.Trim()))
        {
            throw new ArgumentException("Número de teléfono no válido.", nameof(number));
        }

        Value = number;
    }

    private static bool IsValidPhoneNumber(string number)
    {
        return PhoneNumberRegex.IsMatch(number);
    }

    [GeneratedRegex(@"^\+?[1-9]\d{1,14}$", RegexOptions.IgnoreCase | RegexOptions.Compiled, "es-PE")]
    private static partial Regex PhoneRegex();
}