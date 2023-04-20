import { getStockInformation } from "./stockInfo";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

async function start() {
  const data = await getStockInformation("AAPL");
  console.log(data);

  await prisma.company.create({
    data: {
      income: data.incomeStatement,
      balance: data.balanceSheet,
    },
  });
}

start();
