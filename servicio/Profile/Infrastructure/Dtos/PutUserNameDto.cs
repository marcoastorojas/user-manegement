using Microsoft.AspNetCore.Authorization.Infrastructure;

namespace servicio.Profile.Infrastructure.Dtos;
public class PutUserNameDto
{
    public string UserName {get; set;} = string.Empty;
}