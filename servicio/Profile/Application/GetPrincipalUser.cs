using servicio.Profile.Domain;

namespace servicio.Profile.Application;
public class GetPrincipalUser
{
    private readonly UserRepository userRepository;
    public GetPrincipalUser(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task<User> Get()
    {
        var user = await userRepository.GetUserById(1);
        return user;        
    }
}