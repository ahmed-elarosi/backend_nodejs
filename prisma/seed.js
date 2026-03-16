import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const creatorId = process.env.SEED_USER_ID;
