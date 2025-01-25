import MongoDB from '../MongoDB.js';
import FileSystem from './PruebaFyle.js';
import PuebaMongo from "./PruebaMongo.js"

class Factory {
    static get(tipo) {
        switch (tipo) {
            case 'MongoDB':
                console.log("persistiendo en Mongo")
                MongoDB.conectar()
                return new PuebaMongo();
            case 'FileSystem':
                console.log("persistiendo en archivos")
                return new FileSystem();
            default:
                throw console.log('No se ha encontrado la persistencia');
        }
    }
}

export default Factory;