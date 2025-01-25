import { MongoClient } from 'mongodb';
import config from '../config.js';



class MongoDB {
    constructor(){}
    
    static db = false;
    static estado = null;
    static conectar = async ()  => {
        try {
            const url = config.DB_URL;
            const dbName = config.DB_HOST;

            const client = new MongoClient(url);
            await client.connect();

            MongoDB.estado = true;
            MongoDB.db = client.db(dbName);
            console.log("Conectado a la base de datos!");

        } catch (err) {
            console.error("Error al conectar a la base de datos:", err);
        }
    }
}
export default MongoDB;