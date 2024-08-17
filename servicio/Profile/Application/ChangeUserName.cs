using servicio.Profile.Domain;

namespace servicio.Profile.Application;
public class ChangeUserName
{
    private readonly UserRepository userRepository;
    public ChangeUserName(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task Change(string userName)
    {
        var userNameVO = new UserName(userName);
        var user = await userRepository.GetUserById(1);
        user.ChangeUserName(userNameVO);
        await userRepository.Save(user);        
        
    }
}