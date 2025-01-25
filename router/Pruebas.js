import Controlador from "../Controlador/Pruebas.js";
import Express from 'express';

class Route{
    constructor(){
        this.controlador = new Controlador();
    }

    config = () => {
        const router = Express.Router();
        router.get("/", this.controlador.pedir);
        router.post("/", this.controlador.subir);
        router.get("/Todo", this.controlador.pedirTodo);
        return router;
    }
}

export default Route;