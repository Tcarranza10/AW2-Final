# Documentación API REST - Módulo Proveedores

## Descripción General
API REST para la gestión de proveedores de la empresa ABC. Implementada con Node.js, Express.js y PostgreSQL.

---

## Endpoints

### 1. Obtener todos los proveedores
```
GET /api/v1/proveedores
```

**Descripción:** Retorna el listado completo de proveedores.

**Respuesta Exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "TechDistributor S.A.",
    "telefono": "+34 912 345 678",
    "email": "juan@techdist.com"
  },
  {
    "id": 2,
    "nombre": "CompuSupply España",
    "telefono": "+34 933 456 789",
    "email": "maria@compusupply.es"
  }
]
```

**Respuesta Sin Datos (404):**
```json
{
  "mensaje": "Proveedores no encontrados",
  "tipo": "info"
}
```

---

### 2. Obtener un proveedor específico
```
GET /api/v1/proveedores/:id
```

**Parámetros:**
- `id` (número, requerido): Identificador del proveedor

**Respuesta Exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "TechDistributor S.A.",
    "telefono": "+34 912 345 678",
    "email": "juan@techdist.com"
  }
]
```

**Proveedor No Encontrado (404):**
```json
{
  "mensaje": "Proveedor no encontrado",
  "tipo": "info"
}
```

---

### 3. Crear un nuevo proveedor
```
POST /api/v1/proveedores
```

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "nombre": "Hardware Mayorista",
  "telefono": "+34 954 567 890",
  "email": "carlos@hwmayor.com"
}
```

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Proveedor Hardware Mayorista dado de alta",
  "tipo": "info"
}
```

**Error - Datos Incompletos (400):**
```json
{
  "mensaje": "Datos incompletos",
  "tipo": "error"
}
```

**Error - Servidor (500):**
```json
{
  "mensaje": "Error en el servidor",
  "tipo": "error"
}
```

---

### 4. Modificar un proveedor
```
PUT /api/v1/proveedores/:id
```

**Parámetros:**
- `id` (número, requerido): Identificador del proveedor

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "nombre": "Hardware Mayorista Actualizado",
  "telefono": "+34 954 567 890",
  "email": "nuevo@hwmayor.com"
}
```

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Proveedor Hardware Mayorista Actualizado modificado",
  "tipo": "info"
}
```

**Error - Datos Incompletos (400):**
```json
{
  "mensaje": "Datos incompletos",
  "tipo": "error"
}
```

**Error - Servidor (500):**
```json
{
  "mensaje": "Error en el servidor",
  "tipo": "error"
}
```

---

### 5. Eliminar un proveedor
```
DELETE /api/v1/proveedores/:id
```

**Parámetros:**
- `id` (número, requerido): Identificador del proveedor

**Respuesta Exitosa (200):**
```json
{
  "mensaje": "Proveedor eliminado",
  "tipo": "info"
}
```

**Proveedor No Encontrado (404):**
```json
{
  "mensaje": "Proveedor no encontrado",
  "tipo": "info"
}
```

**Error - Servidor (500):**
```json
{
  "mensaje": "Error en el servidor",
  "tipo": "error"
}
```

---

## Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 400 | Bad Request - Solicitud inválida (datos incompletos) |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

---

## Estructura del Proyecto

```
proyecto/
├── modulos/
│   ├── api-crud/
│   │   └── v1/
│   │       └── proveedores/
│   │           ├── controlador.proveedores.mjs
│   │           ├── modelo.proveedores.mjs
│   │           └── rutas.proveedores.mjs
│   └── modulos.mjs
├── admin/
│   ├── modulos/
│   │   └── proveedores/
│   │       ├── alta.html
│   │       ├── editar.html
│   │       ├── index.html
│   │       └── js/
│   │           ├── alta.js
│   │           ├── editar.js
│   │           ├── funciones.js
│   │           └── index.js
│   └── recursos/
├── config/
├── conexion/
├── app.mjs
└── package.json
```

---

## Notas Importantes

- Todos los endpoints retornan JSON
- La API respeta los principios REST
- Se utiliza PostgreSQL como base de datos
- Las variables de entorno se configuran en el archivo `.env`
- El sistema de módulos ESModules es obligatorio
