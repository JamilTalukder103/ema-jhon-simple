import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            console.log(id)
        }
        console.log(storedCart)
    }, [products])
    const [cart, setCart] = useState([])
    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="shop-product">

                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handelAddToCart={handelAddToCart}
                        ></Product>
                    )
                }
            </div>
            <div className="shop-cart">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;