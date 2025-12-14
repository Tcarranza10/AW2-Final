import {
    procesarFormulario,
    altaRegistro,
} from '../../../recursos/js/utilidades.js';
// ----------------------------------------------
// Referenciamos
const formulario = document.getElementById('form-editar');
const mensajes = document.getElementById('mensajes');
// ----------------------------------------------
// Asignar escuchador evento
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    // Obtener datos formulario
    const datosFormulario = procesarFormulario(formulario);
    // Enviar datos al back
    try {
        const respuesta = await altaRegistro(
            '/api/v1/proveedores/',
            'POST',
            datosFormulario
        );
        const datos = await respuesta.json();
        const { mensaje, tipo } = datos;
        mensajes.classList.remove('mensaje-error','mensaje-info');
        if (tipo == 'error') {
            mensajes.classList.add('mensaje-error');
        }
        if (tipo == 'info') {
            mensajes.classList.add('mensaje-info');
            formulario.querySelectorAll('input').forEach(($campo)=>{
                $campo.disabled = true
            })
            formulario.querySelector('button').style.display = 'none'
            
        }
        mensajes.innerHTML = mensaje;
    } catch (error) {
        console.log(error);
        mensajes.innerHTML = 'No se pudo dar de alta el registro';
    }
});
