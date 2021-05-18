import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(e=> e.amount).reduce((t,e)=> t + e,0).toFixed(2)

    return (<>
        <h4>Your balance</h4>
        <h1 id='balance'>${amount}</h1>
    </>)
}