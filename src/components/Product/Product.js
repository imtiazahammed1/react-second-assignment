import React from 'react';

const Product = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;