import React, {useState} from 'react'

export default function AddTransaction() {
const [item, setItem] = useState("");
const [amount, setAmount] = useState(0);

  return (
    <div> <h3>Add new transaction</h3>
    <form>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder="Enter text..." value={item} onChange={(e)=> setItem(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >{amount} <br />
          (negative - expense, positive - income)</label
        >
        <input type="number"placeholder="Enter amount..."  onChange={(e)=>setAmount(e.target.value)}/>
      </div>
      <button className="btn">Add transaction</button>
    </form></div>
  )
}
