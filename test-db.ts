import { prisma } from "./lib/prisma";

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("✅ Database connection successful!");

        const result = await prisma.$queryRaw`SELECT version()`;
        console.log("Database version:", result);

        await prisma.$disconnect();
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
}

testConnection();
