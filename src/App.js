import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import error_404 from './images/error_404.png';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LayOut from "./component/layout/LayOut";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import WishListPage from "./pages/WishListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userInput, setUserInput] = useState("");
  const [wishList, setWishList] = useState([]);
  function getData() {
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    getData()
  }, []);

  const router = createBrowserRouter([
    {
      path:"/",
      element:<LayOut/>,
      children: [
        {
          path: "/",
          element: <HomePage productList={productList.slice(0, 3)} wishList={wishList}
          setWishList={setWishList}/>,
        },
        {
          path: "/products",
          element: <ProductsPage 
            productList={productList}  
            setUserInput={setUserInput} 
            userInput={userInput}
            wishList={wishList}
            setWishList={setWishList} 
            />,  
        }, 
        {
          path: "/products/:productId",
          element: <ProductDetailsPage />,
        },
        {
          path: "/wishlist",
          element: <WishListPage wishList={wishList} setWishList={setWishList} /> 
        }, 
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ]
    }
  ])

  if(loading === true)
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress size={200} />
    </Box>
    );
  }

  if (error) {
    return( <div> <img src={error_404} alt="Error" width="100%" height="100%" /></div>);
  }
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;