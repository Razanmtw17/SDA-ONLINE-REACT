import React  from 'react';
import './ProductsStyle.css';
import { Link } from "react-router-dom";
export default function Product({productList, wishList, setWishList }) {

  function addToFav(product) {
    const isAlreadyInWishlist = wishList.some(item => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishList([...wishList, product]);
    }
  }
  return (
    <div className="container">
    <br/>
   <br/>
   <br/>
   <div className="products">
   {productList.map((product) => {
     return (
      
        <div key={product.id} className="cards">
          <Link to={`products/${product.id}`}>
       <br/> <br/>
       <img src = {product.image} alt = "cart"/>
       </Link>
       <br/> <br/>
       <div className="contairr">
         <div className="priceTag">
           <p>{product.title}</p>
           <p>Price : {product.price} </p>
         </div>
       
         <div className = "cartbutton"></div>
         <button className = "favbutton"  onClick={() => addToFav(product)}></button>
       </div>
     </div>
      
       
     );
   })}
   </div>
 </div>
  )
}
