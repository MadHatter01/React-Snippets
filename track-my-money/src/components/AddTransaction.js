import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';


export default function AddTransaction() {
const [item, setItem] = useState("");
const [amount, setAmount] = useState(0);
const {addTransaction} = useContext(GlobalContext);

const handleSubmit = (e)=>{
  e.preventDefault()
const newItem = {
  id: uuidv4(),
  item:item,
  amount:parseInt(amount)
}
addTransaction(newItem);
}
  return (
    <div> <h3>Add new transaction</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text..." value={item} onChange={(e)=> setItem(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >{amount} (negative - expense, positive - income)</label
        >
        <input type="number"placeholder="Enter amount..."  onChange={(e)=>setAmount(e.target.value)}/>
      </div>
      <button className="btn" >Add transaction</button>
    </form></div>
  )
}
