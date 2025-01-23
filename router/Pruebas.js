import Controlador from "../controlador/Pruebas.js";

class Route{
    constructor(){
        this.controlador = new Controlador();
    }

    config(){
        const router = express.Router();
        router.get("/id?", this.controlador.pedir);
        router.post("/", this.controlador.subir);
        return router;
    }
}

export default Route;