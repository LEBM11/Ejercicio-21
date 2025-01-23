import MongoDB from './MongoDB.js';
import FyleSysten from './FyleSysten.js';

class Factory {
    static get(tipo) {
        switch (tipo) {
            case 'MongoDB':
                return new MongoDB();
            case 'FileSystem':
                return new FyleSysten();
            default:
                throw new Error('No se ha encontrado la persistencia');
        }
    }
}

export default Factory;