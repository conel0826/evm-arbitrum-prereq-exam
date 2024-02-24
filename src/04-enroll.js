// test: 0xa64acca904908951f3e070330ddc8aa8bf5164a1
const ethers = require("ethers");

require('dotenv').config();

const { JsonRpcProvider, Wallet, parseEther, Contract } = ethers;
const CONTRACT_ABI = require("./artifacts/Enroll.json").abi;

const CONTRACT_ADDRESS = `${process.env.CONTRACT_ADDRESS}`;
const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`; // Private key from your MetaMask;
const JSON_RPC_URL = `${process.env.JSON_RPC_URL}`;

const GITHUB_USERNAME = `${process.env.GITHUB_USERNAME}`;
const DISCORD_HANDLE = `${process.env.DISCORD_HANDLE}`;

const signMessage = async (message, wallet) => {
  const messageHash = ethers.id(message);
  const hashBytes = ethers.getBytes(messageHash);
  const signature = await wallet.signMessage(hashBytes);
  const sig = ethers.Signature.from(signature);
  return {
    sig,
    messageHash,
  };
};

async function main() {
  const provider = new JsonRpcProvider(JSON_RPC_URL);
  // Create a wallet instance
  let wallet = new Wallet(PRIVATE_KEY, provider);
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
  const { sig, messageHash } = await signMessage("do or do not, there is no try", wallet);

  const tx = await contract
    .connect(wallet)
    .enroll(GITHUB_USERNAME, DISCORD_HANDLE, messageHash, sig.v, sig.r, sig.s);
  console.log("tx hash", tx.hash); // tx hash 0x373bcec2e365834d625ea31f1bce7f95b8549d08bc169a6f9c357c4da0c64c43
}

main().then().catch(console.error);
