namespace servicio.Profile.Domain;

using System;

public class UserName
{
    public string Value { get; private set; }

    public UserName(string userName)
    {
        if (string.IsNullOrWhiteSpace(userName))
        {
            throw new ArgumentException("La dirección de correo electrónico no puede estar vacía.", nameof(userName));
        }

        if (userName.Trim().Length < 3)
        {
            throw new ArgumentException("Longitud minima requerida de caracteres. 3");
        }

        Value = userName;
    }


}
