# Configurar en docker

Debe tener docker desktop instalado:
[Bajar Docker](https://docs.docker.com/desktop/setup/install/windows-install/)

---
1. Iniciar Docker Desktop
---
2. En VSCODE click derecho en `Dockerfile` -> Abrir en consola de VSCODE
---
3. Ejecutar comandos:
    1. `docker build -t imagen_pg .` // Incluir el punto. Esperar a que termine.
    2. `docker run --name contenedor_pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=abc -p 5432:5432 -d imagen_pg` // Crear el contenedor y ya está listo para utilizar

### Credenciales para acceder al la BD

Usuario: `root`

Contraseña: `pass`

### Configuracion `.env`

Si se utiliza Docker, la configuración de `.env` debería estar funcionando correctamente.

## Uso de Docker Desktop

Una vez corridos los comandos, le debe aparecer la imagen `imagen_pg` y el contenedor `contenedor_pg`.

En contenedores, puede parar y arrancar el contenedor. No lo borre, ya que si está desarrollando, se perderán los datos de la BD.

## Uso de la extension Container Tools (Opcional)

Buscar extension en VSCODE `Container Tools` e instalarla.

O descargarla -> [Container Tools](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-containers)

Una vez instalada, busque el cotenedor creado en la extensión `Container Tools` con el nombre `imagen_pg contenedor_pg`. Cuando esté desarrollando, no hace falta volver a instalar y crear el contenedor, ya que va a borrar la BD, solo con click derecho sobre y elija `Start` para arrancar, y `Stop` para pararlo.