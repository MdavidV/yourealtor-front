import app from "./app.js";
import { connectToDatabase } from "./database.js";

connectToDatabase();

app.listen(4000);
console.log("listen on serv", 4000);
