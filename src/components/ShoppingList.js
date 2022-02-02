import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let itemsToList = []
  const [selectedCategory, setSelectedCategory] = useState('All')

  function filterChange(e){
    setSelectedCategory(e.target.value)
  }

  function filteredList(arr) {
    itemsToList = arr.filter((obj) => selectedCategory === 'All' ? obj : obj.category === selectedCategory)}
      // if (selectedCategory === 'All'){
      //   return obj
      // }
      // else{
      //   return obj.category === selectedCategory
      // }

  filteredList(items)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange = {filterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
