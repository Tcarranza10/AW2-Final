# Documentación del Proyecto - Módulo Proveedores

## Descripción General

El proyecto es una API REST desarrollada con Node.js, Express.js y PostgreSQL para la gestión de productos y proveedores de la empresa ABC.

## Implementación del Módulo Proveedores

### Estructura Implementada

Se implementó el módulo de proveedores siguiendo el patrón arquitectónico ya establecido en el módulo de productos, con separación de responsabilidades en tres capas:

#### 1. **Capa de Datos (Modelo)**
**Archivo:** `modulos/api-crud/v1/proveedores/modelo.proveedores.mjs`

Contiene todas las operaciones de base de datos:
- `obtenerProveedores()` - SELECT * FROM proveedores
- `obtenerProveedor(id)` - SELECT por ID
- `crearProveedor(proveedor)` - INSERT
- `modificarProveedor(proveedor)` - UPDATE
- `eliminarProveedor(id)` - DELETE

#### 2. **Capa de Lógica (Controlador)**
**Archivo:** `modulos/api-crud/v1/proveedores/controlador.proveedores.mjs`

Procesa las solicitudes del cliente:
- Valida los datos recibidos
- Llama a las funciones del modelo
- Maneja errores y excepciones
- Retorna respuestas JSON con mensajes y códigos de estado HTTP apropiados

#### 3. **Capa de Rutas**
**Archivo:** `modulos/api-crud/v1/proveedores/rutas.proveedores.mjs`

Define los endpoints REST:
- GET /api/v1/proveedores
- GET /api/v1/proveedores/:id
- POST /api/v1/proveedores
- PUT /api/v1/proveedores/:id
- DELETE /api/v1/proveedores/:id

### Frontend Implementado

Se creó una interfaz de administración web en `/admin/modulos/proveedores/` con las siguientes páginas:

- **index.html** - Listado de proveedores con tabla
- **alta.html** - Formulario para crear nuevos proveedores
- **editar.html** - Formulario para modificar y eliminar proveedores

#### Archivos JavaScript
- **index.js** - Obtiene y renderiza el listado
- **alta.js** - Maneja el envío del formulario de creación
- **editar.js** - Maneja la modificación y eliminación
- **funciones.js** - Funciones auxiliares para renderizar datos en formularios

### Base de Datos

**Tabla "proveedores":**

```sql
CREATE TABLE IF NOT EXISTS proveedores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

**Campos:**
- `id`: Identificador único (clave primaria)
- `nombre`: Nombre de la empresa proveedora
- `telefono`: Teléfono de contacto
- `email`: Correo electrónico

## Patrones REST Implementados

### Verbos HTTP Utilizados

| Verbo | Operación | Endpoint |
|-------|-----------|----------|
| GET | Obtener todos | `/api/v1/proveedores` |
| GET | Obtener uno | `/api/v1/proveedores/:id` |
| POST | Crear | `/api/v1/proveedores` |
| PUT | Modificar | `/api/v1/proveedores/:id` |
| DELETE | Eliminar | `/api/v1/proveedores/:id` |

### Códigos de Estado HTTP Utilizados

- **200 OK**: Operación exitosa
- **400 Bad Request**: Datos incompletos o inválidos
- **404 Not Found**: Recurso no encontrado
- **500 Internal Server Error**: Error del servidor

## Manejo de Errores

La aplicación implementa un sistema de manejo de errores consistente:

```json
{
  "mensaje": "Descripción del error",
  "tipo": "error|info"
}
```

Los códigos de error de PostgreSQL se mapean a mensajes amigables:
- `23505`: Violación de restricción única (duplicado)
- `22001`: Longitud de campo excedida

## Comunicación Cliente-Servidor

### Flujo de Datos Frontend → Backend

1. **Frontend** (`js/alta.js`): Captura datos del formulario
2. **Utilidades** (`recursos/js/utilidades.js`): Convierte FormData a JSON
3. **Fetch API**: Envía petición HTTP con body JSON
4. **Backend - Rutas**: Recibe petición y la enruta
5. **Backend - Controlador**: Procesa y valida datos
6. **Backend - Modelo**: Accede a la base de datos
7. **Respuesta**: Retorna JSON con código de estado

### Flujo de Datos Backend → Frontend

1. **Backend** devuelve JSON con `{ mensaje, tipo }`
2. **Frontend** recibe respuesta
3. **JavaScript** actualiza la UI mostrando mensaje
4. **Redirección**: Tras éxito, redirige a listado

## Configuración y Variables de Entorno

El archivo `.env` contiene:
```
PUERTO = 3000
BD_HOST = 'localhost'
BD_PUERTO = 5432
BD_USUARIO = 'postgres'
BD_PASSWORD = 'Alpaca21'
BD_NOMBRE = 'abc'
```

## Iniciando la Aplicación

```bash
# Instalar dependencias
npm install

# Desarrollo (con reload automático)
npm run dev

# Producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura Modular del Sistema

La aplicación utiliza ESModules (`import/export`) y está organizada en módulos independientes:

- `app.mjs` → Punto de entrada
- `config/config.mjs` → Variables de entorno
- `conexion/conexion.bd.mjs` → Pool de conexión PostgreSQL
- `modulos/modulos.mjs` → Agregador de módulos
- `modulos/api-crud/v1/proveedores/` → Módulo proveedores
- `modulos/api-crud/v1/productos/` → Módulo productos

Cada módulo es independiente y reutilizable.

## Documentación Adicional

Para detalles técnicos de los endpoints, consultar `API_DOCUMENTATION.md`
