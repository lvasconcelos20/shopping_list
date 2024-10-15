import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient({
  log: process.env.NODE_ENV !== "production" ? ["warn", "error"] : [],
  errorFormat: process.env.NODE_ENV !== "production" ? "pretty" : "colorless",
});

prisma
  .$connect()
  .then(() => {
    console.log("📦 Successfully connected with database");
  })
  .catch((error: PrismaClientInitializationError) => {
    console.log("❌ Error connecting to database", error);
  });

export default prisma;
