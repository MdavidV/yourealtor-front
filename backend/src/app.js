import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);


// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '../../dist')));

// app.use('/auth', authRoutes);



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
// })

export default app


