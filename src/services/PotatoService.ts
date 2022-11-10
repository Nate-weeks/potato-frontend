import { ethers } from 'ethers';
import potatoGameAbi from '../contracts/BlockPotatoGame.json';
import potatoAbi from '../contracts/BlockPotato.json';

const GAME_CONTRACT_ADDRESS = "0xA47E743a070AE945eA62E528ED4af3119f75447A"
const NFT_CONTRACT_ADDRESS = "0x8b0C767871DFF2dbf4E158de75EfD9D5ED92D2Ff"

const getProvider = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider)
    return provider;
  }

const getSigner = () => {
    const provider = getProvider();
    const signer = provider.getSigner();
    console.log(signer)
    return signer;
}

const getGameContract = () => {
    const signer = getSigner();
    console.log(signer)
    const contract = new ethers.Contract(
      GAME_CONTRACT_ADDRESS,
      potatoGameAbi.abi,
      signer
    );
    return contract;
  };

const getPotatoContract = () => {
    const signer = getSigner();
    console.log(signer)
    const contract = new ethers.Contract(
      NFT_CONTRACT_ADDRESS,
      potatoAbi.abi,
      signer
    );
    return contract;
}

const purchasePotato = async () => {
    const contract = getGameContract();
    const tx = await contract.play();
    const receipt = await tx.wait();
    console.log(`attempt to get potato (${receipt.transactionHash})\n`);
  }

  const burnPotato = async () => {
    const signer = getSigner();
    const potatoContract = getPotatoContract();
    let tokenId = await potatoContract.tokenOfOwnerByIndex(
        signer._address,
        0
      )
    if(tokenId){
        // burn it
    }
    console.log(`burned nft`);
  }



  export {
      getGameContract,
      getSigner,
      getProvider,
      purchasePotato
  }