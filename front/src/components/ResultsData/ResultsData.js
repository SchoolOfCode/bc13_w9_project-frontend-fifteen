// search input + search button + data retuned from call (cards)
import React from 'react'
import Card from '../Card/Card'
export default function ResultsData() {

  return (
    <div className='searchDataArea'>
      <input type="text" id='searchTitle' placeholder='Search by title'></input>
      <button id="searchButton">Search</button>
      <Card/>
    </div>
  )
}


