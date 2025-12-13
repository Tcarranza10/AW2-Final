/*
Acceso a la capa de datos
*/

import pool from '../../../../conexion/conexion.bd.mjs';

async function obtenerProveedores() {
    try {
        const resultado = await pool.query('SELECT * FROM proveedores ORDER BY nombre ASC');
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function obtenerProveedor(id) {
    try {
        const resultado = await pool.query(
            'SELECT * FROM proveedores WHERE id=$1',
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function crearProveedor(proveedor) {
    try {
        const { nombre, contacto, telefono, email } = proveedor;
        const resultado = await pool.query(
            `
            INSERT INTO proveedores
                (nombre, contacto, telefono, email)
            VALUES
                ($1,$2,$3,$4)
            RETURNING id, nombre
        `,
            [nombre, contacto, telefono, email]
        );
        return resultado;
    } catch (error) {
        throw error;
    }
}

async function modificarProveedor(proveedor) {
    try {
        const { id, nombre, contacto, telefono, email } = proveedor;
        const resultado = await pool.query(
            `UPDATE proveedores 
                SET 
                    nombre=$1,
                    contacto=$2,
                    telefono=$3,
                    email=$4 
                    WHERE id=$5
                RETURNING id, nombre
            `,
            [nombre, contacto, telefono, email, id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function eliminarProveedor(id) {
    try {
        const resultado = await pool.query(
            'DELETE FROM proveedores WHERE id=$1 RETURNING id',
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { obtenerProveedores, obtenerProveedor, crearProveedor, modificarProveedor, eliminarProveedor };
