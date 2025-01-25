import MongoDB from "../MongoDB.js";

class PruebaMongo{
    constructor(){
    }

    pedir = async () => {
        if(!MongoDB.estado){throw new Error ("Dao sin conención a Mongo") }
        const palabra = await MongoDB.db.collection("Prueba").find({}).toArray()
        return palabra
    }

    subir = async (palabra) => {
        if(!MongoDB.estado){throw new Error ("Dao sin conención a Mongo") }
        await MongoDB.db.collection("Prueba").insertOne(palabra)
        return palabra
    }
}

export default PruebaMongo