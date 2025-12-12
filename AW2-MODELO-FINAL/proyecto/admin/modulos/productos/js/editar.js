import { renderizarFormulario } from './funciones.js';
import {
    procesarFormulario,
    obtenerParametroId,
    altaRegistro,
    obtenerRegistros,
    eliminarRegistro,
} from '../../../recursos/js/utilidades.js';
// ---------------------------------------------------------
const id = obtenerParametroId();
const formulario = document.getElementById('form-editar');
const botonEliminar = document.getElementById('eliminar-registro');
const mensajes = document.getElementById('mensajes');
// Asignar escuchador evento boton eliminar
botonEliminar.addEventListener('click', async (evento) => {
    evento.preventDefault();
    if (confirm('Eliminar registro?')) {
        const respuesta = await eliminarRegistro('/api/v1/productos/' + id);
        // Respuestas

        if (respuesta.ok) {
            const { mensaje, tipo } = await respuesta.json();
            mensajes.classList.remove('mensaje-error', 'mensaje-info');
            if (tipo == 'error') {
                mensajes.classList.add('mensaje-error');
            }
            if (tipo == 'info') {
                mensajes.classList.add('mensaje-info');
            }
            mensajes.innerHTML = mensaje;
            formulario.style.display = 'none';
            botonEliminar.style.display = 'none'
        }
        setTimeout(() => {
            location.href = './';
        }, 2000);
    } else {
        return false;
    }
});
// Asignar escuchador evento enviar formulario (submit)
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    // Obtener datos formulario
    const datosFormulario = procesarFormulario(formulario);
    // Enviar datos al back
    const respuesta = await altaRegistro(
        '/api/v1/productos/' + id,
        'PUT',
        datosFormulario
    );
    // Respuestas
    const { mensaje, tipo } = await respuesta.json();
    mensajes.classList.remove('mensaje-error', 'mensaje-info');
    if (tipo == 'error') {
        mensajes.classList.add('mensaje-error');
    }
    if (tipo == 'info') {
        mensajes.classList.add('mensaje-info');
    }
    mensajes.innerHTML = mensaje;
});
// Renderizar datos en formulario
const resultado = await obtenerRegistros('/api/v1/productos/' + id);
renderizarFormulario(resultado, formulario);
