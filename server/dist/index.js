"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connectDB_1 = __importDefault(require("./db/connectDB"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./routes/user.route"));
// Initializing
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const origin = process.env.ORIGIN || "*";
// Configaration
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin,
    credentials: true
}));
dotenv_1.default.config({
    path: "./.env"
});
// Api endpoints
app.use("/api/v1/user", user_route_1.default);
//Database connection and app start
;
(async () => {
    await (0, connectDB_1.default)()
        .then(response => (console.log("Your Database was host on the : " + response.connection.host),
        console.log("Your Database was run on port : " + response.connection.port),
        console.log("Your Database name is : " + response.connection.name)));
    // then run the application
    app.listen(port, () => {
        console.log("Your server was listing on port : " + port);
    });
})();
