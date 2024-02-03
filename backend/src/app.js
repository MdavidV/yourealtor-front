import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";

import cors from 'cors';
const app = express();
const path = require("path");
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);


export default app;
