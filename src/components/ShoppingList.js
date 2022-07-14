import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [filterBy, setFilterBy] = useState('All')

  function handleFilterByChange(event){
    setFilterBy(()=>event.target.value)
  }

  // need to filter according to the one that is selected
  const shoppingDisplay = items.filter(item => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
      <select name="filter" onChange={handleFilterByChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {shoppingDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
