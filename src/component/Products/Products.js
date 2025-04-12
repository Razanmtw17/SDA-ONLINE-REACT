import React from 'react';
import './ProductsStyle.css';
import { Link } from "react-router-dom";
export default function Products({productList, wishList, userInput,setWishList }) {
  
 
  const result = productList.filter((product) =>
    product.title.toLowerCase().includes(userInput.toLowerCase())
  );
  function addToFav(product) {
    const isAlreadyInWishlist = wishList.some(item => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishList([...wishList, product]);
    }
  }
  let products = productList;
  if (userInput) {
    products = result;
  }
  return (
    <div>
      <br/> <br/> <br/>
      <div className="products">
      {products.map((product) => {
       return (
        
        <div key={product.id} className="cards">
       <br/> <br/>
       <Link to={`${product.id}`}>
       <img src = {product.image} alt = "cart"/>
       </Link>
       <br/> <br/>
       <div className="contairr">
         <div className="priceTag">
           <p>{product.title}</p>
           <p>Price : {product.price} </p>
         </div>
         <div className = "cartbutton"></div>
         <button className = "favbutton" onClick={() => addToFav(product)}></button>
       </div>
     </div>
      );
      
    })}
    </div>
    </div>
   )
 }