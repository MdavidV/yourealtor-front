import { PORT } from "./config.js";
import app from "./app.js";
import { connectToDatabase } from "./database.js";

connectToDatabase();

app.listen(PORT);
console.log("listen on serv", PORT);
