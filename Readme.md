# USER MANAGEMENT

A continuación, encontrarás instrucciones para levantar la aplicacion.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

## Configuración y Ejecución

### 1. Clonar el repositorio

1. Primero clonar el repositorio `user-manegement`:

    ```bash
    git clone https://github.com/marcoastorojas/user-manegement
    ```
2. Ingresar a la carpeta clonada:

    ```bash
    cd user-manegement
    ```
### 2. Configuración del Backend con Docker

1. Navega a la carpeta `servicio`:

    ```bash
    cd servicio
    ```

2. Levanta el backend junto con la base de datos utilizando Docker Compose en modo `detached` para no tener que mantener la terminal abierta:

    ```bash
    docker compose up -d
    ```

   Esto iniciará los servicios definidos en el archivo `docker-compose.yml` en segundo plano.

### 3. Configuración del Frontend

1. Navega a la carpeta `client` (una carpeta arriba de `service`):

    ```bash
    cd ../client
    ```

2. Instala las dependencias del frontend utilizando npm:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

4. Abre tu navegador y dirígete a la siguiente URL para usar la aplicación:

    [http://localhost:5173/](http://localhost:5173/)

## Notas Adicionales

- Asegúrate de que Docker esté en funcionamiento antes de intentar levantar los servicios del backend.

---

¡Gracias por usar mi aplicación! Si tienes alguna pregunta, no dudes en contactar conmigo.

