import Factory from "../Modelo/Daos/Factory.js";
import config from "config.js";
import { ObjectId } from 'mongodb';
import Validaciones from "./Validaciones.js";

class Servicio{
    constructor(){;
        this.modeloPersistencia = Factory.get(config.PERSISTENCIA);
        this.validaciones = new Validaciones();
    }

    async pedir(id) {
        try {
            const resultado = await this.validaciones.validar(error, id);
            if(resultado){
                const objectId =  ObjectId.createFromHexString(id);
                return await this.modeloPersistencia.pedir(objectId);
            }
        } catch (err) {
            console.error('Error al pedir el documento:', err.message);
            throw err;
        }
    }

    async subir(datos) {
        try {
            const resultado = await this.validaciones.validar(datos);
            if(resultado){
                return await this.modeloPersistencia.subir(datos);}
        } catch (err) {
            console.error('Error al subir los datos:', err.message);
            throw err;
        }
    }
}

export default Servicio;