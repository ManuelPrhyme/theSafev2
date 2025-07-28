import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ABI,Address } from './contractinfo'
import { createWalletClient, parseEther, custom } from 'viem'
import { sepolia } from 'viem/chains'

const WalletClient = createWalletClient({
  chain:sepolia,
  transport: custom(window.ethereum)
})

function App() {
  const [account, setAccount] = useState()
  const [amount,setAmount] = useState()

  const deposit = async () => {
     const Hash = await WalletClient.writeContract({
      address:Address,
      abi:ABI,
      functionName:"deposit",
      args:[],
      account:account,
      value:parseEther(amount)
     })

     console.log(Hash)
  }

  const connect = async () => {
    const account = await window.ethereum.request({method: "eth_requestAccounts"})
    console.log("Account: ",account)
    setAccount(account[0])

  }
  
  const disconnect = async () => {
      await window.ethereum.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]})
  }

  return (
    <div>
      <h1>theSafe</h1>
      <button onClick = {connect}>Connect</button>
      <button onClick = {disconnect}>Disconnect</button>
      <input type="text" onChange = {(e) => {setAmount(e.target.value)}} />
      <button onClick = {deposit}>Deposit</button>
    </div>
  )
}

export default App
