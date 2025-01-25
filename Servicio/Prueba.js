import Factory from "../Modelo/Daos/Factory.js";
import config from "../config.js";
import Validaciones from "./Validaciones.js";

class Servicio{
    constructor(){;
        this.modeloPersistencia = Factory.get(config.PERSISTENCIA);
        this.validaciones = new Validaciones();
    }

    pedirTodo = async () => {
        try {
            return await this.modeloPersistencia.pedir();
        } catch (err) {
            console.error('Error al pedir el documento:', err.message);
            throw err;
        }
    }

    pedir = async () => {
        try {
            const palabra = await this.modeloPersistencia.pedir();
            let string = ""
            palabra.forEach(element => {
                if (string === ""){string = element.Palabra}
                else{
                    string += " " + element.Palabra
                    console.log(string)
                }
            });
            setTimeout(() =>{},1000);
            return string
        } catch (err) {
            console.error('Error al pedir el documento:', err.message);
            throw err;
        }
    }

    subir = async (datos) => {
        try {
            const resultado = await this.validaciones.validar(datos);
            if(resultado){
                datos._id = null
                datos.Tiempo = Date.now()
                return await this.modeloPersistencia.subir(datos);}
        } catch (err) {
            console.error('Error al subir los datos:', err.message);
            throw err;
        }
    }
}

export default Servicio;