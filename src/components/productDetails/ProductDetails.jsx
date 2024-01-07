import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';
import React, { useState } from 'react';
import './ProductDetails.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const ProductDetails = ({ id, title, description, price, discountPercentage, rating, stock, brand, images, category  }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className='product'>
      <div className="pro-img">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        {images.map((imageUrl, index) => (
          <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
            {index === currentSlide && <img src={imageUrl} alt="slide" />}
          </div>
        ))}
      </div>
      <div className='pro-det'>
        <div>{brand}</div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{rating} rating</div>
        <div>${price}</div>
        <div>({discountPercentage}% off)</div>
        <div>Only {stock} items left</div>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;