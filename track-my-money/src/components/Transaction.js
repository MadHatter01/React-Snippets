import React from 'react'

export default function Transaction({transaction}) {
    const sign = transaction.amount <0 ? '-' : '+';
    const styleClass = transaction.amount < 0 ? 'minus' : 'plus';
  return (
   <li className={styleClass}>
    {transaction.item} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
  </li> 
  )
}
