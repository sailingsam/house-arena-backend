import express, { json } from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
// import houseRoutes from "./routes/houseRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
app.use(cors());
connectDB();

app.use(json());
app.use(morgan("dev"));

// app.use("/api/houses", houseRoutes);
app.use("/api/events", eventRoutes);
// app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;
