import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product-container'>
            <img src={img} alt="" className='product-img' />
            <div className='product-content'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price'>Price ${price}</h4>
                <p>Manufacturer : {seller}</p>
                <p>Rating :{ratings}</p>
            </div>
            <button onClick={() => { handelAddToCart(props.product) }} className="addToCart">
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;