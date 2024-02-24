const { JsonRpcProvider, Wallet, parseEther } = require("ethers");
require('dotenv').config();

const PRIVATE_KEY = "0x14fd6ae7aacfa521852b1c447eb8cbcd828c01b1b687144b4b11f1f76ba4c4bd";
const DESTINATION_WALLET = "0xD13CF22017197FeD8abaD59CAED68f8Fd66c87c7";
// The wallet you created from MetaMask;
const JSON_RPC_URL = `${process.env.JSON_RPC_URL}`;

async function main() {
  const provider = new JsonRpcProvider(JSON_RPC_URL);

  let wallet = new Wallet(PRIVATE_KEY, provider);

  // if not successful, adjust this amount
  let amountInEther = "0.4999";

  let tx = {
    to: DESTINATION_WALLET,
    value: parseEther(amountInEther),
  };

  const txObj = await wallet.sendTransaction(tx);
  console.log("tx submitted", txObj.hash); //tx submitted 0x45778362a2f8e15c3e07b7f8fc0e2b92f201075bf84963f55f7ed09b5d90dd90
}

main().then().catch(console.error);
