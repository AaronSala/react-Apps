import React from 'react'

export default function TransactionList() {
  return (
    <div>
          <h3>History</h3>
          <hr className='line'></hr>
          <ul id='list' className='list'>
              <li className='minuss'>
              Cash <span>-Ksh0.00</span> <button className='delete-btn' hidden>x</button>
              </li>
          </ul>
    </div>
  )
}
