import './App.css';
import Profile from './components/Profile';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import potato from './potato.png'
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Stats, { currentStats } from './components/Stats';
import {purchasePotato, burnPotato, getStats} from './services/PotatoService'
import { useEffect, useState } from 'react';

function App() {

  const [stats, setStats] = useState<currentStats>({balance: "", totalNfts: "", userNfts: ""})
  const [loadingFind, setLoadingFind] = useState(false)
  const [loadingBurn, setLoadingBurn] = useState(false)

	useEffect(() => {
		 getStats().then(response => {
			console.log(response)
			setStats(response)
		 }).catch(error => {
       console.log(error)
     })
	}, [])

  function findPotato(){
    setLoadingFind(true)
    purchasePotato().then(() => {
      getStats().then(response => {
        setStats(response)
        setLoadingFind(false)
      })
    }).catch(error => {
      setLoadingFind(false)
      console.log(`error finding potato: ${error}`)
    })
  }

  function redeemPotato(){
    setLoadingBurn(true)
    burnPotato().then((response) => {
      getStats().then(response => {
        setStats(response)
        setLoadingBurn(false)
      })
    }).catch(error => {
      setLoadingBurn(false)
      console.log(`error finding potato: ${error}`)
    })
  }
  
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
          <Stats balance={stats.balance} totalNfts={stats.totalNfts} userNfts={stats.userNfts}/>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton loading={loadingFind} style={{borderRadius: "29px", marginLeft:"3em"}} variant="contained" size="large" color="secondary" onClick={() => findPotato()}>Find potato</LoadingButton>
        </Grid>
        <Grid item xs={2}>
          <LoadingButton loading={loadingBurn} style={{borderRadius: "29px"}} variant="contained" size="large" color="success" onClick={() => redeemPotato()}>Burn potato</LoadingButton>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
