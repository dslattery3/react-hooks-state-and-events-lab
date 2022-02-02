import React from "react";
import { useState } from "react/cjs/react.development";

function Item({ name, category }) {
  const [inCart, setIsIn] = useState(false)
  let cartStatus = inCart ? 'in-cart' : ''

  function addCart(){
    setIsIn(!inCart)
  }
  
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
