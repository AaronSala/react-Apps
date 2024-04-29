import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div className='display'>
      {gotoPrevPage && <button onClick={gotoPrevPage} className='btn'>Prev</button>}
      {gotoNextPage && <button onClick={gotoNextPage} className='btn'>Next</button>}
    </div>
  )
}

export default Pagination

