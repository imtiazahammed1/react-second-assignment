import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h3 className='cart-info'>Selected Products</h3>
            {
                cart.map(item => <h5>{item.name}</h5>)
            }
            <button className='cart-btn1'>Choose 1 For Me</button>
            <br></br>
            <button className='cart-btn2'>Choose Again</button>
        </div>
    );
};

export default Cart;