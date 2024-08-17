USE mydb;

CREATE TABLE usuarios (
    id INT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    userName VARCHAR(50),
    passWord VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(100)
);

INSERT INTO usuarios (
    id, 
    firstName, 
    lastName, 
    userName, 
    passWord, 
    email, 
    phone
) 
VALUES (
    1, 
    'Nombre', 
    'Apellido', 
    'UserName', 
    '$2a$10$6oa1nWxNqhMtSQ2Vt7CuDecPs8gh4m/algYhm3yS1sDgj/Ac2XfiC', 
    'prueba@gmail.com', 
    '987987987'
);
