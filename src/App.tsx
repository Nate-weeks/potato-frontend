import './App.css';
import Profile from './components/Profile';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import potato from './potato.png'
import { Button } from '@mui/material';
import Stats from './components/Stats';
import {purchasePotato} from './services/PotatoService'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

function App() {

  const supportedChainIds = [5];

  const connectors = {
    injected: {},
  };

  return (
    <div className="App">
      <div style={{height:"40px"}}></div>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        </Grid>
        <Grid style={{marginTop:"2em"}} item xs={4}>
          <h1>BlockPotato</h1>
        </Grid>
        <Grid style={{marginTop:"3em"}} item xs={4}>
          <Profile />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <img style={{height:"335px", width:"413px"}} src={potato}/>
        </Grid>
        <Grid item xs={4}>
          <Stats/>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={2}>
          <Button style={{borderRadius: "29px", marginLeft:"3em"}} variant="contained" size="large" color="secondary" onClick={() => purchasePotato()}>Find potato</Button>
        </Grid>
        <Grid item xs={2}>
          <Button style={{borderRadius: "29px"}} variant="contained" size="large" color="success">Burn potato</Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
