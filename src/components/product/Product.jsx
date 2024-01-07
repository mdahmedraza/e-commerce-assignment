
import React, {useState, useEffect, useCallback} from 'react';
import ProductDetails from '../productDetails/ProductDetails';
import './Product.css';

import Navbar from '../navbar/Navbar';
import Cart from '../cart/Cart';
import {useSelector} from 'react-redux';

const Product = () => {
  const showCart = useSelector((state)=>state.ui.cartIsVisible);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProductsHandler = useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch('https://dummyjson.com/products/');
      if(!response.ok){
        throw new Error('Something went wrong!')
      }
      const data = await response.json();
      const transformedProducts = data.products.map((productData)=>{
        return{
          id: productData.id,
          title: productData.title,
          description: productData.description,
          price: productData.price,
          discountPercentage: productData.discountPercentage,
          rating: productData.rating,
          stock: productData.stock,
          brand: productData.brand,
          images: productData.images,
          category: productData.category
        }
      })
      setProducts(transformedProducts);
    }catch(error){
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(()=>{
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  //filter
  const [filteredTopic, setFilteredTopic] = useState("smartphones");
  const filterChangeHandler = selectedTopic => {
    setFilteredTopic(selectedTopic)
    console.log(selectedTopic)
  }
  const filteredTopics = products.filter(product => {
    return product.category === filteredTopic
  })
  let productContent=<p>there is no item for you...</p>
  if(filteredTopics.length>0){
    productContent = filteredTopics.map((product) => (
      <ProductDetails
        id={product.id}
        title={product.title} 
        description={product.description}
        price={product.price}
        discountPercentage={product.discountPercentage}
        rating={product.rating}
        stock={product.stock}
        brand={product.brand}
        images={product.images}
        category={product.category}
        />
    ))
  }

  return (
    <div>
      <Navbar selected={filteredTopic} onChangeFilter={filterChangeHandler} />
      {showCart && <Cart />}
    <div className='products'>
      {!isLoading && products.length > 0 && productContent}
      {!isLoading && products.length === 0 && !error && <p>found no movies...</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
    </div>
  );
};

export default Product;
