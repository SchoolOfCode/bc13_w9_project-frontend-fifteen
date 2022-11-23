

import React from 'react'


const randomData = [
  {
    id: 1,
    title: "example",
  comment: "example",
  code: "example"
  },
  {
    id: 2,
    title: "exampleTwo",
  comment: "exampleTwo",
  code: "exampleTwo"
  },
  {
    id: 3,
    title: "exThree",
  comment: "exThree",
  code: "exThree"
  }

]

export default function Input() {
  return (
    <div className="inputContainer">
      <div className="inputData">
        <input id= "addTitle" className="inputField" type="text" placeholder="Add title"></input>
        <input id= "addDescription" className="inputField" type="text" placeholder="Add description"></input>
      </div>
      <textarea id="addCodeSnippets" rows='10' cols='40'></textarea>
      <button id="buttonAddItem" >Add</button>
    </div >
  )
}

