/*
Conecta capa de datos a respuesta clientes
*/
import * as modelo from './modelo.proveedores.mjs';

const MENSAJES_PROVEEDORES = {
    '23505' : 'El id de proveedor ya existe',
    '22001' : 'La longitud del campo excede lo permitido'
}
const MENSAJES_TIPOS = {
    INFO : 'info',
    ERROR : 'error'
}

async function obtenerProveedores(req, res) {
    try {
        const resultado = await modelo.obtenerProveedores();
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Proveedores no encontrados', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDORES[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function obtenerProveedor(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.obtenerProveedor(id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDORES[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function crearProveedor(req, res) {
    try {
        const { nombre, contacto, telefono, email } = req.body;
        if (!nombre || !contacto || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.crearProveedor({
            nombre: nombre.trim(),
            contacto: contacto.trim(),
            telefono: telefono.trim(),
            email: email.trim(),
        });
        const { nombre: nombreCreado } = resultado.rows[0];
        res.json({ mensaje: `Proveedor ${nombreCreado} dado de alta`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDORES[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function modificarProveedor(req, res) {
    try {
        const { id } = req.params;
        const { nombre, contacto, telefono, email } = req.body;
        if (!id || !nombre || !contacto || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.modificarProveedor({
            id,
            nombre: nombre.trim(),
            contacto: contacto.trim(),
            telefono: telefono.trim(),
            email: email.trim(),
        });
        const { nombre: nombreModificado } = resultado.rows[0];
        res.json({ mensaje: `Proveedor ${nombreModificado} modificado`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDORES[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function eliminarProveedor(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.eliminarProveedor(id);
        if (resultado.rows.length > 0) {
            res.json({ mensaje: 'Proveedor eliminado', tipo: MENSAJES_TIPOS.INFO });
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PROVEEDORES[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

export { obtenerProveedores, obtenerProveedor, crearProveedor, modificarProveedor, eliminarProveedor };
