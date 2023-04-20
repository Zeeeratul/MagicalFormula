import { getStockInformation } from "./stockInfo";
import dotenv from "dotenv";

dotenv.config();

async function start() {
  const data = await getStockInformation("AAPL");
  console.log(data);
}

start();
