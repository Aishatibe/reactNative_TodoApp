import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './checkout.css';

function CheckoutProduct({ id, title, price, rating, image }) {
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__rating">
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <AiOutlineStar />
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
