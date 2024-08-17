using MySqlConnector;
using servicio.Profile.Application;
using servicio.Profile.Domain;
using servicio.Profile.Infrastructure.Implementations;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();


//Application
builder.Services.AddScoped<ChangeName>();
builder.Services.AddScoped<ChangeUserName>();
builder.Services.AddScoped<ChangePassword>();
builder.Services.AddScoped<GetPrincipalUser>();
//Infrastructure - Implementations
builder.Services.AddScoped<UserRepository, UserRepositoryMysql>();
builder.Services.AddScoped<PasswordService, PasswordServiceBCrypt>();
builder.Services.AddTransient(x => new MySqlConnection(builder.Configuration.GetConnectionString("Default")));

var app = builder.Build();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.MapControllers();
app.MapGet("/", () => "Hello World");
app.Run();