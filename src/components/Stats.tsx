import { FC, useEffect, useState } from "react"
import { getStats } from '../services/PotatoService'

export type currentStats = {
	balance: string
	totalNfts: string
	userNfts: string
}

const Stats: FC<currentStats> = (props): JSX.Element => {

	return (
		<div>
			<div style={{height:'1em'}}></div>
			<h3>POT:</h3>
			<h1>{props.balance}</h1>
			<h3># of potatos</h3>
			<h1>{props.totalNfts}</h1>
			<h3>You own</h3>
			<h1>{props.totalNfts}</h1>
		</div>
)
}

export default Stats