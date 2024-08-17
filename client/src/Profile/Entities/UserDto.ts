import User from "./User";

export class UserDto {
    public firstName:string;
    public lastName:string;
    public userName:string;
    public password:string;
    public email: string;
    public phoneNumber: string;
    constructor(firstName:string, lastName:string, username:string, password:string, email: string, phoneNumber: string) {
        this.firstName = firstName;
        this.userName = username;
        this.password = password;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber =  phoneNumber;
    }
}

export class UserMapper {
    public static toUser(userDto: UserDto): User {
        return new User(userDto.firstName, userDto.lastName, userDto.userName, userDto.password, userDto.email, userDto.phoneNumber)
    }

    public static fromUser(user: User): UserDto{
        return new UserDto(user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber);
    }
}