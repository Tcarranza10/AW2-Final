# Crear BD pgAdmin

Debe tener creada la base de datos en pgAdmin y a mano el _usuario_ y la _contraseña_.

Buscar las credenciales (usuario y contraseña), para configurar el archivo `.env`.

Normalmente, pgAdmin suele tener el usuario `postgres`y la contraseña creada cuando se instaló.

## Crear la BD

Crear una base de datos `abc`en pgAdmin.

## Seleccion de BD

`Servers → PostgreSQL → Databases → abc`

### Con QueryTool

```sql
    CREATE TABLE productos (
        id SERIAL PRIMARY KEY,
        codigo VARCHAR(50) NOT NULL UNIQUE,
        nombre VARCHAR(100) NOT NULL,
        marca VARCHAR(50) NOT NULL,
        stock INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
    );

```

Verificar si aparece la tabla:

`abc → Schemas → public → Tables → productos`

### Con import/export

1. Hacer clic derecho en la tabla productos.
2. Seleccionar Import/Export Data…
3. En la ventana que aparece:

| Campo     | Valor                       |
| --------- | --------------------------- |
| Filename  | seleccionar `productos.csv` |
| Format    | CSV                         |
| Encoding  | UTF-8                       |
| Header    | ✔ Yes                       |
| Delimiter | ,                           |
| Quote     | "                           |
| Mode      | Import                      |

Verificar si se cargaron los datos.
