import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Parse connection URL to ensure password is properly formatted
const url = new URL(process.env.DATABASE_URL!);
const pool = new Pool({
    host: url.hostname,
    port: parseInt(url.port),
    database: url.pathname.slice(1),
    user: url.username,
    password: url.password,
    ssl: {
        rejectUnauthorized: false,
    },
});
const adapter = new PrismaPg(pool);

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
