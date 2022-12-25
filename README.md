#Basic ERC20 Token
#################################################################
This repo contains a basic setup for deploying an ERC20 token. 
Code for deploying token is imported directly form Openzeppelin contracts
To prevent redundant work and uses an already tested/secure standard
#################################################################

#To Deploy Token
###Setup
*Hardhat must be installed in your local environment
*You must obtain a privateKey for Either Infura, Alchemy or another node service
for hosting the smart contract
*This privateKey must be placed in an .env file to be imported in hardhat.config
*Place Private Key for wallet deploying ERC20 Contract in .secret file
*import secret to be used in hardhat.config

###From Command line 
@info https://hardhat.org/tutorial/deploying-to-a-live-network
@to deploy to a network, that network must be configured in hardhat.config

npx hardhat node
npx hardhat run scripts/deploy.ts --network <network_name>
ex. npx hardhat run scripts/deploy.ts --network polygon
