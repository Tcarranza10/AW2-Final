
import express from 'express';
import * as controlador from './controlador.productos.mjs';

const rutasProductos = express.Router();
rutasProductos.use(express.json());

rutasProductos.get('/api/v1/productos', controlador.obtenerProductos);
rutasProductos.get('/api/v1/productos/:id', controlador.obtenerProducto);
rutasProductos.post('/api/v1/productos', controlador.crearProducto);
rutasProductos.put('/api/v1/productos/:id', controlador.modificarProducto);
rutasProductos.delete('/api/v1/productos/:id', controlador.eliminarProducto);

export default rutasProductos;
