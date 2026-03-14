import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

// Import Routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";

config();
connectDB();

const app = express();

//API Routs
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);

const PORT = 5555;
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection");
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception");
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// Handle unhandled promises rejection
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception");
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("SIGTERM", (err) => {
    console.error("SIGTERM received, Shutting Down Gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});

// GET, POST, PUT, DELETE

// AUTH  - signin, signup
// MOVIE - Getting All Movies
// USER  - Profile
// WatchList
