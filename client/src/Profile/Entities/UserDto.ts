import User from "./User";

export default class UserDto {
    public FirstName:string;
    public LastName:string;
    public UserName:string;
    public Password:string;
    public Email: string;
    public PhoneNumber: string;
    constructor(firstName:string, lastName:string, username:string, password:string, email: string, phoneNumber: string) {
        this.FirstName = firstName;
        this.UserName = username;
        this.Password = password;
        this.LastName = lastName;
        this.Email = email;
        this.PhoneNumber =  phoneNumber;
    }

    toUser(): User {
        return new User(this.FirstName, this.LastName, this.UserName, this.Password, this.Email, this.PhoneNumber)
    }

    public static fromUser(user: User): UserDto{
        return new UserDto(user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber);
    }
}