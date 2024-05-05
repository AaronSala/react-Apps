import React from 'react'

export default function IncomeExpenses() {
  return (
    <div className='inc-expense-container'>
          <div>
              <h4>INCOME</h4>
              <p id='money-plus' className='money plus'>+Ksh0.00</p>
          </div>
          <div className='devider'></div>
          <div>
              <h4>EXPENSES</h4>
              <p id='money-minus' className='money minus'>-Ksh0.00</p>
          </div>
    </div>
  )
}
