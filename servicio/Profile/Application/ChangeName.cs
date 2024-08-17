using servicio.Profile.Domain;

namespace servicio.Profile.Application;
public class ChangeName
{
    private readonly UserRepository userRepository;
    public ChangeName(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public async Task Change(string firstName, string lastName)
    {
        var user = await userRepository.GetUserById(1);
        user.ChageFirstName(firstName);
        user.ChangeLastName(lastName);
        await userRepository.Save(user);
    }

}