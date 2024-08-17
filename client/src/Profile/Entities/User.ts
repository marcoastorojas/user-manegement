export default class User {
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

    get Name(): string{
        return this.FirstName + " " + this.LastName
    }

    changeFirstName(firstName: string){
        this.FirstName = firstName;
    }
    changeLastName(lastName: string){
        this.LastName = lastName;
    }
    changePassword(password: string){
        this.Password = password;
    }
    chageUserName(userName:string){
        this.UserName = userName;
    }

}