import { useEffect, useState } from "react"
import { getStats } from '../services/PotatoService'

interface currentStats {
	balance: string
	totalNfts: string
}

function Stats(){
	const [stats, setStats] = useState<currentStats>({balance: "", totalNfts: ""})

	useEffect(() => {
		 getStats().then(response => {
			console.log(response)
			setStats(response)
		 })
	}, [])

	return (
		<div>
			<div style={{height:'1em'}}></div>
			<h3>POT:</h3>
			<h1>{stats.balance}</h1>
			<h3># of potatos</h3>
			<h1>{stats.totalNfts}</h1>
		</div>
)
}

export default Stats