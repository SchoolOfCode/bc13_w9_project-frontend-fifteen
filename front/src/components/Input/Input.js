import { useState } from "react";

let nextId = 0;

export default function Input() {
  const [title, setTitle] = useState("");
  const [array, setArray] = useState([]);
  
  function handleChange (event) {
    setTitle(event.target.value)
  }

  function handleClick () {
    setTitle("");
    setArray([...array, { id: nextId++, title: title }]);
    console.log(array)
  }

  return (
    <>
      <h1>Test Page</h1>
      <input value={title} onChange={handleChange} />
      <button onClick={handleClick} > Add </button>
      <ul>
        {array.map((array) => (
          <li key={array.id}>{array.title}</li>
        ))}
      </ul>
    </>
  );
}



/*

usin
import { useRef } from "react"
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
  const inputTitle = useRef(null);
  const inputDescr = useRef(null);
  const inputSnip = useRef(null);

  
 
  function handleClick () {
    let newTitle = inputTitle.current.value;
    let newDescr = inputDescr.current.value;
    let newSnip = inputSnip.current.value;
    let newID = randomData.length +1
    
    let newObject = {id: newID, title:newTitle, comment:newDescr, code:newSnip }
    console.log(newObject)
   
    
    // When button is pressed ✅ 
    // Take in data from the inputs and create a new object ✅
    // Then push the new object to randomData

  }


  
return (
  <>
    <input id= "input" ref={inputTitle} type="text" placeholder="Add title"></input>
    <input id= "input" ref={inputDescr}type="text"  placeholder="Add description"></input>
    <input id= "input" ref={inputSnip} type="text"  placeholder="Add code snippet"></input>
    <button id="button" onClick={handleClick}>Add</button>
  </>
)
}

*/