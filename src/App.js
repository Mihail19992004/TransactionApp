
import React from "react";
import {Header} from "./components/Header";
import './App.css'
import {Balance} from "./components/Balance";
import {IE} from "./components/IE";
import {TransactionList} from "./components/TransactionList";
import {NewTransaction} from "./components/NewTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (<GlobalProvider>
    <Header/>
    <div className="container">
      <Balance />
      <IE/>
      <TransactionList/>
      <NewTransaction />
    </div>
  </GlobalProvider>)
}

export default App;
