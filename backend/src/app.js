import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import sqlRoutes from "./routes/sqlRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";

import cors from 'cors';
const app = express();

app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use(sqlRoutes);
app.use(mailRoutes);


export default app;
