import React , {useState} from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false)

  function handleClick(){
    setInCart(()=>!inCart)
  }

  let classCartbtn = inCart ? 'remove' : 'add';
  let classCart = inCart ? 'in-cart' : null;
  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button onClick={handleClick} className={classCartbtn}>{ inCart? 'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
