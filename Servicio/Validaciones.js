import Joi from "joi";

class Validaciones{
    constructor(){
        this.schema = Joi.object({
        Palabra: Joi.string().min(2).max(30).required(),
        Tiempo: Joi.number().min(3).max(30).required(),
        id: Joi.string().min(6).max(24).required()
});;
    }

    validar = async(datos) => {
        try{
            return this.schema.validate(datos);
        }catch(e){
            console.error('Error al validar los datos:', e.message);
            throw e;
        }
    }

}

export default Validaciones;