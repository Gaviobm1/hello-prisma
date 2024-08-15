const { PrismaClient, Prisma } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  const email = "bob@prisma.io";
  const result =
    await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`;
  console.log(result);
}

main();
