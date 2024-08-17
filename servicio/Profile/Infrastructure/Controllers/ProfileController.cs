using Microsoft.AspNetCore.Mvc;
using servicio.Profile.Application;
using servicio.Profile.Infrastructure.Dtos;

namespace servicio.Profile.Infrastructure.Controllers;


[ApiController]
[Route("api/user")]
public class ProfileController: ControllerBase
{

    [HttpGet]
    public async Task<UserDto> Get([FromServices] GetPrincipalUser getPrincipalUser){
        var user = await getPrincipalUser.Get();
        return UserDto.FromUser(user);
    }

    [HttpPut("userName")]
    public async Task UserName([FromServices] ChangeUserName changeUserName, [FromBody] PutUserNameDto putUserNameDto){
        await changeUserName.Change(putUserNameDto.UserName);
    }

    [HttpPut("name")]
    public async Task Name([FromServices] ChangeName changeName, [FromBody] PutNameDto putNameDto){
        await changeName.Change(putNameDto.FirstName, putNameDto.LastName);
    }

    [HttpPut("password")]
    public async Task<IActionResult> Password([FromServices] ChangePassword changePassword, [FromBody] PutPasswordDto putPasswordDto){
        var rpta = await changePassword.Change(putPasswordDto.Current, putPasswordDto.Password);
        if(!string.IsNullOrEmpty(rpta)){
            return BadRequest(new { messageError = rpta });
        }
        return Ok(new { messageError = "" }); 
    }
}