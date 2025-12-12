// Importamos/ejecutamos modulo configuraciones
import './config/config.mjs';
// Express -> SP3/H2 p.235 TID AW2
import express from 'express';
// Módulos -> SP5/H3 p.409 TID AW1
import modulosApi from './modulos/modulos.mjs';

const PUERTO = process.env.PUERTO;
// Instanciamos Express
const app = express();
// Modulos
app.use(modulosApi);
// Front admin
app.use(express.static('admin'));
// Atrapamos todos los métodos y rutas no configurados
app.use((req, res) => {
    res.status(404).redirect('/404.html');
});
// Atrapamos los errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Error interno del servidor');
});
// Poner a escuchar
const servidor = app.listen(PUERTO, ()=>{
    const PUERTO_ACTUAL = servidor.address().port
    console.log(`Servidor corriendo en el puerto ${PUERTO_ACTUAL}`)
    console.log(`Ingresar en el front: http://localhost:${PUERTO_ACTUAL}`)
});