/*
Conecta capa de datos a respuesta clientes
*/
import * as modelo from './modelo.productos.mjs';

const MENSAJES_PRODUCTOS = {
    '23505' : 'El codigo de producto ya existe',
    '22001' : 'El la longitud del campo exece los permitido'
}
const MENSAJES_TIPOS = {
    INFO : 'info',
    ERROR : 'error'
}
// Listado de codigos: https://www.postgresql.org/docs/current/errcodes-appendix.html
async function obtenerProductos(req, res) {
    try {
        const resultado = await modelo.obtenerProductos();
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Productos no encontrados', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PRODUCTOS[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function obtenerProducto(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const resultado = await modelo.obtenerProducto(id);
        if (resultado.rows.length > 0) {
            res.json(resultado.rows);
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado', tipo: MENSAJES_TIPOS.INFO });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PRODUCTOS[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function crearProducto(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { codigo, nombre, marca, stock } = req.body;
        // Verificamos
        if (!codigo || !nombre || !marca || !stock) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.crearProducto({
            codigo: codigo.trim(),
            nombre: nombre.trim(),
            marca: marca.trim(),
            stock: stock.trim(),
        });
        // { codigo: codigoCreado } -> porque codigo ya está declarada en este ámbito
        // Ámbito SP4/H3 p.263 TID AW1
        const { codigo: codigoCreado } = resultado.rows[0];
        res.json({ mensaje: `Producto ${codigoCreado} dado de alta`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PRODUCTOS[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function modificarProducto(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const { codigo, nombre, marca, stock } = req.body;
        // Verificamos
        if (!id || !codigo || !nombre || !marca || !stock) {
            return res.status(400).json({ mensaje: 'Datos incompletos', tipo: MENSAJES_TIPOS.ERROR });
        }
        const resultado = await modelo.modificarProducto({
            id,
            codigo: codigo.trim(),
            nombre: nombre.trim(),
            marca: marca.trim(),
            stock: stock.trim(),
        });
        // { codigo: codigoModificado } -> porque codigo ya está declarada en este ámbito
        // Ámbito SP4/H3 p.263 TID AW1
        const { codigo: codigoModificado } = resultado.rows[0];
        res.json({ mensaje: `Producto ${codigoModificado} modificado`, tipo: MENSAJES_TIPOS.INFO });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PRODUCTOS[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}

async function eliminarProducto(req, res) {
    try {
        // Asignación desestructurante SP5/H4 p.417 TID AW1
        const { id } = req.params;
        const resultado = await modelo.eliminarProducto(id);
        if (resultado.rows.length > 0) {
            const { codigo: codigoEliminado } = resultado.rows[0];
            res.status(200).json({ mensaje: `Producto con código: ${codigoEliminado} eliminado`, tipo: MENSAJES_TIPOS.INFO });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado', tipo: MENSAJES_TIPOS.ERROR });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: MENSAJES_PRODUCTOS[error.code] || 'Error en el servidor', tipo: MENSAJES_TIPOS.ERROR });
    }
}
export { obtenerProductos, obtenerProducto, crearProducto, modificarProducto, eliminarProducto };
