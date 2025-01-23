import Servicio from "../Servicio/Prueba.js";

class Controlador{
    constructor(){
        this.servicio = new Servicio();
    }

    pedir = async (req, res) => {
        try{
            const id = req.params.id;
            const resultado = await this.servicio.pedir(id);
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