import express from 'express'

// Rutas de la version 1 de la API
import rutasProductosV1  from './api-crud/v1/productos/rutas.productos.mjs'
import rutasProveedoresV1  from './api-crud/v1/proveedores/rutas.proveedores.mjs'

// ----------------------------------

const modulosApi = express.Router()

modulosApi.use(rutasProductosV1)
modulosApi.use(rutasProveedoresV1)

export default modulosApi;
