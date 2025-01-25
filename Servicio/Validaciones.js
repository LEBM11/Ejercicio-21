import Joi from "joi";

class Validaciones{
    constructor(){
        this.schema = Joi.object({
        Palabra: Joi.string().min(2).max(30).required(),
});;
    }

    validar = async(datos) => {
        try{
            const objeto = this.schema.validate(datos);
            return objeto.value
        }catch(e){
            console.error('Error al validar los datos:', e.message);
            throw e;
        }
    }

}

export default Validaciones;