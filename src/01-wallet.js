const { Wallet } = require("ethers");
const { createRandom  } = Wallet;

// Step 1 - Create a new wallet using ethers Wallet
// https://docs.ethers.org/v6/api/wallet/
async function main() {
  const wallet = createRandom()
  const { privateKey, address } = wallet;
  console.log("wallet", {
    privateKey,
    address,
  });
  // wallet {
  //   privateKey: '0x14fd6ae7aacfa521852b1c447eb8cbcd828c01b1b687144b4b11f1f76ba4c4bd',
  //   address: '0x6bbF49B70962aD33721175794397C8c043658C86'
  // }
  // Sample output (DO NOT USE THIS KEYPAIR!!!)
  // wallet {
  //   privateKey: '0xdf923254e3ff1633a083e0c5b40cd7a842af1174d17c72d8a5a4ae950def162c',
  //   address: '0x19FDB5f594Ec3451a1640746C00f706A63A598BD'
  // }
}

main().then().catch(console.error);
