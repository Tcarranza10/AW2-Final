/*
Acceso a la capa de datos
*/

import pool from '../../../../conexion/conexion.bd.mjs';

async function obtenerProductos() {
    try {
        const resultado = await pool.query('SELECT * FROM productos ORDER BY nombre ASC');
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function obtenerProducto(id) {
    try {
        const resultado = await pool.query(
            'SELECT * FROM productos WHERE id=$1',
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function crearProducto(producto) {
    try {
        const { codigo, nombre, marca, stock } = producto;
        const resultado = await pool.query(
            `
            INSERT INTO productos
                (codigo, nombre, marca, stock)
            VALUES
                ($1,$2,$3,$4)
            RETURNING id, codigo
        `,
            [codigo, nombre, marca, stock]
        );
        return resultado;
    } catch (error) {
        throw error;
    }
}

async function modificarProducto(producto) {
    try {
        const { id, codigo, nombre, marca, stock } = producto;
        const resultado = await pool.query(
            `UPDATE productos 
                SET 
                    codigo=$1,
                    nombre=$2,
                    marca=$3,
                    stock=$4 
                    WHERE id=$5
                RETURNING id, codigo
            `,
            [codigo, nombre, marca, stock, id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function eliminarProducto(id) {
    try {
        const resultado = await pool.query(
            `DELETE FROM productos 
                WHERE id=$1
                RETURNING id, codigo
            `,
            [id]
        );
        return resultado;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    modificarProducto,
    eliminarProducto,
};
