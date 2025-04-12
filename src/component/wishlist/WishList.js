import React from 'react'
import { Link } from "react-router-dom";
export default function WishList({wishList , setWishList}) {
    function addToFav(product) {
      const isAlreadyInWishlist = wishList.some(item => item.id === product.id);

    if (isAlreadyInWishlist) {
      setWishList(wishList.filter(item => item.id !== product.id));
    } else {
      setWishList([...wishList, product]);
    }
   
     }
    if (wishList.length === 0) {
      return <p> The wish list is empty.</p>;
    }
    return (
        <div>
        <h1> WishList</h1>
        {wishList.map((item) => {
          return (
            
                <div key={item.id} className="cards">
                <br/> <br/>
                <Link to={`products/${item.id}`}>
                <img src = {item.image} alt = "cart"/>
                </Link>
                <br/> <br/>
                    <div className="contairr">
                        <div className="priceTag">
                        <p>{item.title}</p>
                        <p>Price : {item.price} </p>
                    </div>
                    <div className = "cartbutton"></div>
                    <button className = "favbutton" onClick={() => addToFav(item)}></button>
                    </div>
                </div>
            
        );
        })}
      </div>
  )
}
