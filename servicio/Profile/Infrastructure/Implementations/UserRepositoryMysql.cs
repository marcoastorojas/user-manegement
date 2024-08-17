using Dapper;
using MySqlConnector;
using servicio.Profile.Domain;
using servicio.Profile.Infrastructure.Dtos;

namespace servicio.Profile.Infrastructure.Implementations;


public class UserRepositoryMysql : UserRepository
{
    private readonly MySqlConnection connection;
    public UserRepositoryMysql(MySqlConnection connection)
    {
        this.connection = connection;
    }
    public async Task<User> GetUserById(int Id)
    {
        var rptaUser = await connection.QueryAsync<UserDto>("select firstName, lastName, userName, email, password, phone as phoneNumber  from usuarios where id = 1");
        var userDto = rptaUser.First();
        return userDto.ToUser();
    }

    public async Task Save(User user)
    {
        await connection.QueryAsync(@"
        UPDATE usuarios SET 
            firstName = @FirstName, 
            lastName = @LastName, 
            userName = @UserName,
            email = @Email,
            password = @Password,
            phone = @PhoneNumber
        WHERE id = 1", 
        new { user.FirstName, user.LastName, UserName = user.UserName.Value, Email = user.Email.Value, user.Password, PhoneNumber = user.PhoneNumber.Value });
    }
}