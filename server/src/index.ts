import Express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";
import connectDB from "./db/connectDB";
import corse from "cors";
import userRouter from "./routes/user.route";


// Initializing
const app = Express();
const port = process.env.PORT || 3000;
const origin = process.env.ORIGIN || "*"

// Configaration
app.use(cookie());
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(
    corse(
        {
            origin,
            credentials:true
        }
    )
);
dotenv.config(
    {
        path:"./.env"
    }
);


// Api endpoints
app.use("/api/v1/user", userRouter );

//Database connection and app start
;(
    async () => {
        await connectDB()
        .then( response => (
            console.log("Your Database was host on the : "+response.connection.host),
            console.log("Your Database was run on port : "+response.connection.port),
            console.log("Your Database name is : "+response.connection.name)
        ))
        
        // then run the application
        app.listen( port , ()=> {
            console.log("Your server was listing on port : "+port);
        })
    }
)();