import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" className='product-img' />
            <div className='product-content'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price'>Price ${price}</h4>
                <p>Manufacturer : {seller}</p>
                <p>Rating :{ratings}</p>
            </div>
            <button className="addToCart">Add to cart</button>
        </div>
    );
};

export default Product;