import axios from "axios";
import { alphavantageApiKey, polygonApiKey } from "./keys";

export async function getStockInformation(symbol: string) {
  const incomeStatementUrl = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${alphavantageApiKey}`;
  const balanceSheetUrl = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${alphavantageApiKey}`;
  const marketCapUrl = `https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${polygonApiKey}`;

  try {
    const response = await Promise.all([
      await axios.get(incomeStatementUrl),
      await axios.get(balanceSheetUrl),
      // await axios.get(marketCapUrl),
    ]);

    return {
      ...response[0].data.annualReports[0],
      ...response[1].data.annualReports[0],
      // marketCap: response[2].data.results.market_cap,
    };
  } catch (error) {
    console.error("Error fetching stock information:", error.message);
  }
}
