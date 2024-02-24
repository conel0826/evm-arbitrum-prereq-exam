const { JsonRpcProvider } = require("ethers");
// 0xD13CF22017197FeD8abaD59CAED68f8Fd66c87c7

const WALLET_ADDRESS = "0x6bbF49B70962aD33721175794397C8c043658C86";
const JSON_RPC_URL = `${process.env.JSON_RPC_URL}`;
// i cant use the bridging
async function main() {
  const provider = new JsonRpcProvider(JSON_RPC_URL);
  const balance = await provider.getBalance(WALLET_ADDRESS);
  console.log("balance is ", balance);
}

main().then().catch(console.error);
