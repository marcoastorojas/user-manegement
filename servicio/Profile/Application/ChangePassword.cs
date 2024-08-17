using servicio.Profile.Domain;

namespace servicio.Profile.Application;
public class ChangePassword
{
    private readonly UserRepository userRepository;
    private readonly PasswordService passwordService;
    public ChangePassword(UserRepository userRepository, PasswordService passwordService)
    {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }

    public async Task<string> Change(string current ,string password)
    {
        //_ = new UserPassword(password);
        var user = await userRepository.GetUserById(1);
        if(!passwordService.VerifyPassword(current, user.Password )){
            return "la contraseña colocada no coincide con la actual";
        }

        var passwordHashed = passwordService.HashPassword(password);

        user.ChangePassword(passwordHashed);
        await userRepository.Save(user);        
        return "";
    }

}