import { createServer } from "node:http";
import { Server } from "socket.io";
import { config } from "dotenv";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT || "3500",10);


config({path:"./env"})
const app = next({dev,hostname,port});
const handle = app.getRequestHandler();


app.prepare().then( ()=> {

    const httpServer = createServer( handle );
    const io = new Server( httpServer );

    io.on('connection', (socket)=> {
        console.log(`user connected to ${socket.id}`)

        socket.on("disconnect", (socket)=>{
            console.log("user is disconnected.")
        })
    });

    httpServer.listen(port, ()=> {
        console.log(`Your server is running at ${port} and your hostname is ${hostname}`)
    });

})