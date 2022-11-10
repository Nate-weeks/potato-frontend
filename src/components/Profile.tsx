import { Button } from "@mui/material";
import { useMetaMask } from "metamask-react";
import { useWeb3 } from "@3rdweb/hooks"
import { useState } from "react";
 
function Profile() {

    const [currentAccount, setCurrentAccount] = useState("");
    

    const connectWallet = async () => {
        try {
          const {ethereum} = window;
    
          if(!ethereum) {
            alert("Opps, looks like there is no wallet!");
            return;
          }
    
          const currentNetwork = ethereum.networkVersion;
          console.log("Current network", currentNetwork);
    
          // request to switch the network 
          try {
            const tx = await ethereum.request(
              {
                method: 'wallet_switchEthereumChain',
                params:[
                  {
                    chainId: '0x5'
                  }
                ]
              }
            );
          }
          catch (tx) {
            if (tx) {
              console.log(tx)
            }
          }
                  
                
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts"});
          setCurrentAccount(accounts[0]); 
    
        }
        catch( error){
          console.log(error);
        }
      }

    if (currentAccount == "") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium" onClick={connectWallet}>Connect Wallet</Button>


    if (currentAccount != "") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium">Connected</Button>

    return null;
}

export default Profile