import { getStockInformation } from "./stockInfo";
import { twelveDataApiKey } from "./keys";
import admin from "firebase-admin";
import axios from "axios";
import fs from "fs";

(async () => {
  const data = await getStockInformation("AAPL");

  console.log(data);
})();

// const valueFixedAssets_NetWorkingCapital =
//   parseInt(AAPL1.propertyPlantEquipment) +
//   (parseInt(AAPL1.totalCurrentAssets) -
//     parseInt(AAPL1.totalCurrentLiabilities));

// const EV =
//   2_550_000_000_000 +
//   parseInt(AAPL1.shortLongTermDebtTotal) -
//   parseInt(AAPL1.cashAndCashEquivalentsAtCarryingValue);

// const ROC = parseInt(AAPL2.ebit) / valueFixedAssets_NetWorkingCapital;

// const EBIT_EV_RATIO = parseInt(AAPL2.ebit) / EV;
