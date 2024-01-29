import app from './app'
import { connectToDatabase } from './database';

connectToDatabase();

app.listen(5173);
console.log('listen on serv', 5173)

