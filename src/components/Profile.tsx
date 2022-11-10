import { Button } from "@mui/material";
import { useMetaMask } from "metamask-react";
 
function Profile() {
    const { status, connect, account, chainId, ethereum } = useMetaMask();

    if (status === "initializing") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium">synchronizing</Button>

    if (status === "unavailable") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium">unavailable</Button>

    if (status === "notConnected") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium" onClick={connect}>Connect Wallet</Button>

    if (status === "connecting") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium">Connecting...</Button>

    if (status === "connected") return <Button style={{borderRadius: "29px"}} variant="contained" size="medium">Connected</Button>

    return null;
}

export default Profile