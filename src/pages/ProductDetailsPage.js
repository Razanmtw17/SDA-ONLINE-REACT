import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import error_404 from '../images/error_404.png';
import './ProductDetails.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default function ProductDetailsPage() {
  const params = useParams();
  let prouductId = params.productId;

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://fakestoreapi.com/products/" + prouductId;

  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }
    fetchData();
  }, [url]);

  console.log(product);
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

  // if the fetching is successful (not error) but the value of proudcut is still null
  if (!product) {
    return    <div> <img src={error_404} alt="Error" width="100%" height="100%" /></div>

  }
  return (
    <div className = "productcontainer">
      <div className ="productimage">
        <img src={product.image} width="200px" alt={product.name} />
      </div>
      <div className = "productinfo">
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
        </Stack>
        <IconButton size="large" color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <div className = "favbutton"></div>
      </div>
  </div>
  )
}