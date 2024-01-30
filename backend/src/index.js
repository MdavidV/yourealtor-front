import app from './app'
import { connectToDatabase } from './database';

connectToDatabase();

app.listen(4000);
console.log('listen on serv', 4000)

