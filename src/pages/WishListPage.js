import React from 'react'
import WishList from "../component/wishlist/WishList";
export default function WishListPage({setWishList, wishList}) {
  return (
    <div>
      <WishList wishList={wishList} setWishList={setWishList}/>
    </div>
  );
}
