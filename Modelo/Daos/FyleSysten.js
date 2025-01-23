import fs from 'fs/promises';
import Validaciones from '../../Servicio/Validaciones.js';

class FileSystem {
    constructor() {
        this.path = '/data.json';
        this.validaciones = new Validaciones();
    } 

    Pedir = async (id) => {
    try {
        const Archivo = await fs.readFile(this.path, 'utf-8');
        const data = Archivo.find((elemento) => elemento.id === id);
        const Busqueda = await JSON.parse(data)
        this.formateo(Busqueda);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
        throw error;
    }}

    Subir = async (datos) => {
        try {
            const Datos = JSON.stringify(datos);
            const Guardado = await fs.writeFile(this.path, Datos);
            return this.formateo(Guardado)
        } catch (error) {
            console.error('Error al guardar los datos:', error.message);
            throw error;
        }}

    formateo = (datos) =>{
        try{
        const{id, Palabra, Tiempo } = datos;
        return `${id}, ${Palabra}, ${Tiempo}`;
        }catch(e){
            console.error('Error al formatear los datos:', e.message);
            throw e;
        }
        }
}