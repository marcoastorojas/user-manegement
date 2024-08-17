namespace servicio.Profile.Domain;

public interface UserRepository
{
    Task<User> GetUserById(int Id);
    Task Save(User user);
}