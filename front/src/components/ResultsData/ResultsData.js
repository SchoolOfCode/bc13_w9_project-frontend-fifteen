// search input + search button + data retuned from call (cards)
import React from 'react'

export default function ResultsData() {

  return (
    <div className='searchDataArea'>
      <input type="text" placeholder='Search by title'></input>
      <button id="searchButton">Search</button>
      <Card/>
    </div>
  )
}
function Card() {
  
  return (
    <div className='cardContainer'>
       <p id='cardTitle'>For loop JS</p>
       <p id='cardDescription'>A simple for loop that returns the array X 3</p>
       <div>
        <textarea className='codeArea' rows='10' cols='40'></textarea>
       </div>
      
    </div>
  ) 
}

