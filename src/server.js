import express from "express";

const app = express();

app.get("/hi", (req, res) => {
    res.json({ message: "Hallo Liebe Kunden" });
});

const PORT = 5555;
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

// GET, POST, PUT, DELETE

// AUTH  - signin, signup
// MOVIE - Getting All Movies
// USER  - Profile
// WatchList
