import React from 'react'


const list = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
const List = () => {
   
    
  const listItems = list.map((item) =>{
    if (item.category === "Fruits") {
      return( <li key={item.name}> {item.category}</li>)
    }
    else if (item.category === 'Vegetables') {
      return <li key={item.name}> {item.category}</li>;
    }
    });

  return (
    <div>
      <h2>Fruits</h2>
      <ul>{listItems}</ul>
      <h2>Vegitables</h2>
    
    </div>
  )
}

export default List
