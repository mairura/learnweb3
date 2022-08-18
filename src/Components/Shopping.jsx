import React from 'react'

export default function Shopping() {
    const items = ["Apples", "Bananas", "Grapes"];
  return (
    <div classname="shopping-list">
        <h1>Shopping List</h1>
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

