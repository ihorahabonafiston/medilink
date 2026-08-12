require("dotenv/config");

const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3304,
  user: "root",
  database: "isams_db",
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.$connect();

  console.log("✅ Prisma connected to isams_db");

  const result = await prisma.$queryRaw`
    SELECT DATABASE() AS database_name
  `;

  console.log("Database:", result);
}

main()
  .catch((error) => {
    console.error("❌ Prisma connection failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });