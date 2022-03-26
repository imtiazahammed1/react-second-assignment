import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;