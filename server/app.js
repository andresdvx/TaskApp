import express from "express";
import morgan from "morgan";
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(authRoutes);
app.use(taskRoutes);

export default app;
