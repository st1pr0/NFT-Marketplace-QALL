async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const NFT = await ethers.getContractFactory("NFT");
  const Marketplace = await ethers.getContractFactory("Marketplace");
  const Token = await ethers.getContractFactory("Token");

  const marketplace = await Marketplace.deploy(1);
  const nft = await NFT.deploy();
  const token = await Token.deploy();

  saveFrontendFiles(marketplace , "Marketplace");
  saveFrontendFiles(nft , "NFT");
  saveFrontendFiles(token , "Token");

  console.log("Marketplace adress: " + marketplace.address);
  console.log("NFT adress: " + nft.address);
  console.log("Token adress: " + token.address);
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });