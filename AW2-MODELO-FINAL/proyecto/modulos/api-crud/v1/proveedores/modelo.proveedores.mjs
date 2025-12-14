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
        const { nombre, telefono, email } = proveedor;
        const resultado = await pool.query(
            `
            INSERT INTO proveedores
                (nombre, telefono, email)
            VALUES
                ($1,$2,$3)
            RETURNING id, nombre
        `,
            [nombre, telefono, email]
        );
        return resultado;
    } catch (error) {
        throw error;
    }
}

async function modificarProveedor(proveedor) {
    try {
        const { id, nombre, telefono, email } = proveedor;
        const resultado = await pool.query(
            `UPDATE proveedores 
                SET 
                    nombre=$1,
                    telefono=$2,
                    email=$3 
                    WHERE id=$4
                RETURNING id, nombre
            `,
            [nombre, telefono, email, id]
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
