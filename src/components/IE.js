import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export function IE() {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(e=> e.amount)
    const plus = amount.filter(e=> e > 0).reduce((t,e)=> t+e,0)
    const minus = amount.filter(e=> e < 0).reduce((t,e)=> t+e,0)
    return(<div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${plus}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${Math.abs(minus)}</p>
        </div>
    </div>)
}