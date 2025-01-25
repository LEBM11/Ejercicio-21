import Servicio from "../Servicio/Prueba.js";

class Controlador{
    constructor(){
        this.servicio = new Servicio();
    }

    pedirTodo = async (req, res) => {
        try{
            const resultado = await this.servicio.pedirTodo();
            res.status(200).json(resultado);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    pedir = async (req, res) => {
        try{
            const resultado = await this.servicio.pedir();
            res.status(200).json(resultado);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }

    subir = async (req, res) => {
        try{
            const datos = req.body;
            const resultado = await this.servicio.subir(datos);
            res.status(200).json(resultado);
        }catch(e){
            res.status(500).json({error: e.message});
        }
    }
}

export default Controlador;