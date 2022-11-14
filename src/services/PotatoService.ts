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
    const contract = new ethers.Contract(
      NFT_CONTRACT_ADDRESS,
      potatoAbi.abi,
      signer
      );
    console.log(contract)
    return contract;
}

const purchasePotato = async () => {
    const contract = getGameContract();
    const tx = await contract.play({value: ethers.utils.parseEther('0.0001')});
    const receipt = await tx.wait();
    console.log(`attempt to get potato (${receipt.transactionHash})\n`);
  }

  const burnPotato = async () => {
    const signer = getSigner();
    const potatoContract = getPotatoContract();
    const gameContract = getGameContract();
    const signerAddress = await signer.getAddress();
    let tokenId = await potatoContract.tokenOfOwnerByIndex(
        signerAddress,
        0
      )
    console.log('token id:', tokenId);
    if(tokenId){
        await gameContract.burnNft(tokenId)
    }
    console.log(`burned nft ${tokenId}`);
  }

  const getStats = async () => {
      const signer = getSigner();
      const signerAddress = await signer.getAddress();
      const gameContract = getGameContract();
      let balance = await gameContract.getTotalBalance()
      let totalNfts = await gameContract.getTotalNFTs()
      let userNfts = await gameContract.getAddressNfts(signerAddress)
      return {"balance": ethers.utils.formatEther(balance), "totalNfts": ethers.utils.formatUnits(totalNfts, 0), "userNfts":ethers.utils.formatUnits(userNfts, 0) }
  }





  export {
      getGameContract,
      getSigner,
      getProvider,
      purchasePotato,
      getStats,
      burnPotato
  }