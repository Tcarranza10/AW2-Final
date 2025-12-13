
import express from 'express';
import * as controlador from './controlador.proveedores.mjs';

const rutasProveedores = express.Router();
rutasProveedores.use(express.json());

rutasProveedores.get('/api/v1/proveedores', controlador.obtenerProveedores);
rutasProveedores.get('/api/v1/proveedores/:id', controlador.obtenerProveedor);
rutasProveedores.post('/api/v1/proveedores', controlador.crearProveedor);
rutasProveedores.put('/api/v1/proveedores/:id', controlador.modificarProveedor);
rutasProveedores.delete('/api/v1/proveedores/:id', controlador.eliminarProveedor);

export default rutasProveedores;
