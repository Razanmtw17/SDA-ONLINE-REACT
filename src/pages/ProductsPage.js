import React from 'react'
import Products from "../component/Products/Products";
import Form from "../component/form/Form";

export default function ProductsPage(prop) {
  const productList = prop.productList;
  const setUserInput = prop.setUserInput;
  const userInput = prop.userInput;
  const wishList = prop.wishList;
  const setWishList = prop.setWishList;
  return (

    <div>
       <br/> <br/>
     <Form setUserInput={setUserInput} />
      <Products productList={productList}
        userInput={userInput}
        wishList={wishList}
        setWishList={setWishList}
      />
    </div>
          
  )
}