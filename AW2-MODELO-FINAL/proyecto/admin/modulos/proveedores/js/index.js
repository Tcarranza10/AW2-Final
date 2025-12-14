import { renderizarListado } from './funciones.js';
import { obtenerRegistros } from '../../../recursos/js/utilidades.js';
const respuesta = await obtenerRegistros('/api/v1/proveedores');
renderizarListado(respuesta);
