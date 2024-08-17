using servicio.Profile.Domain;

namespace servicio.Profile.Infrastructure.Dtos;

public class UserDto
{
    public string FirstName {get; set;} = string.Empty;
    public string LastName {get; set;} = string.Empty;
    public string UserName {get; set;} = string.Empty;
    public string Password {get; set;} = string.Empty;
    public string Email {get; set;} = string.Empty;
    public string PhoneNumber {get; set;} = string.Empty;


    public static UserDto FromUser(User user){
        return new UserDto(){
            FirstName = user.FirstName,
            LastName = user.LastName,
            UserName = user.UserName.Value,
            Password = user.Password,
            Email = user.Email.Value,
            PhoneNumber = user.PhoneNumber.Value
        };
    }

    public User ToUser(){
        return new User(
            FirstName, 
            LastName,
            Password, 
            new UserName(UserName), 
            new UserEmail(Email), 
            new UserPhoneNumber(PhoneNumber));
    }
}