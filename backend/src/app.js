import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import sqlRoutes from "./routes/sqlRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import calendlyRoutes from "./routes/calendlyRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import fileUpload from "express-fileupload";

import cors from "cors";

import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./archivos",
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", authRoutes);
app.use(sqlRoutes);
app.use(mailRoutes);
app.use(calendlyRoutes);
app.use(blogRoutes);
app.use(adminRoutes);

export default app;
