import { prisma } from "../config/db.js";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    res.json(body);

    // check if user exists
    const userExists = await prisma.user.findUnique({
        where: { email: email },
    });

    if (userExists) {
        return res.status(400).json({ error: "User already exists with this email" });
    }
};

export { register };
