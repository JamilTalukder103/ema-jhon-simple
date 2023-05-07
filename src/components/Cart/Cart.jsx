import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = (total * 7 / 100);
    const totalPrice = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected product :{cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax :${tax.toFixed(2)}</p>
            <h4>Grand Total ${totalPrice.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;