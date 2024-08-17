namespace servicio.Profile.Domain;
public class User
{
    public string FirstName { get; private set; }
    public string LastName { get; private set; }
    public string Password { get; private set; }
    public UserName UserName { get; private set; }
    public UserEmail Email { get; private set; }
    public UserPhoneNumber PhoneNumber { get; private set; }

    public User(string firstName, string lastName, string password, UserName userName, UserEmail email, UserPhoneNumber phoneNumber)
    {
        ValidateMinLengthStringValue(firstName);
        ValidateMinLengthStringValue(lastName);
        FirstName = firstName;
        LastName = lastName;
        Password = password;
        UserName = userName;
        Email = email;
        PhoneNumber = phoneNumber;
    }

    public void ChageFirstName(string firstName){
        ValidateMinLengthStringValue(firstName);
        FirstName = firstName;
    }

    public void ChangeLastName(string lastName){
        ValidateMinLengthStringValue(lastName);
        LastName = lastName;
    }

    public void ChangeUserName(UserName userName){
        UserName = userName;
    }

    public void ChangePassword(string password){
        Password = password;
    }

    private static void ValidateMinLengthStringValue(string value)
    {
        if (value.Length < 3)
        {
            throw new ArgumentException("Longitud minima requerida de caracteres. 3");
        }
    }

}