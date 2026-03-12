import express from "express";

const router = express.Router();

router.get("/hi", (req, res) => {
    res.json({ message: `HIIIIIIIIIIIIIIIIIII` });
});

export default router;
