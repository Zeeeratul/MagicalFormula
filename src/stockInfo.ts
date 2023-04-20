import axios from "axios";

export async function getStockInformation(symbol: string) {
  const ALPHAVANTAGE_API_KEY = process.env.ALPHAVANTAGE_API_KEY;

  const incomeStatementUrl = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;
  const balanceSheetUrl = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;

  try {
    const response = await Promise.all([
      await axios.get(incomeStatementUrl),
      await axios.get(balanceSheetUrl),
    ]);

    return {
      incomeStatement: response[0].data.annualReports[0],
      balanceSheet: response[1].data.annualReports[0],
    };
  } catch (error) {
    console.error("Error fetching stock information:", error.message);
  }
}
