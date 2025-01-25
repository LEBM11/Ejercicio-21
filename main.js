import Express, {Router} from 'express';
import Cors from 'cors';
import config from "./config.js";
import RoutePruebas from "./Router/Pruebas.js";

class Server{
    start = () => {
        const app = Express()
        app.use(Express.json())
        app.use(Cors())
        app.listen(config.PORT, () => {
            console.log(`Servidor escuchando en el puerto http://localhost:${config.PORT}`)
        })
        app.get("/", (req, res) => {res.send("hola mundillo")})
        app.use("/api/pruebas", new RoutePruebas().config());
        
    }    
}

const server = new Server();
server.start();