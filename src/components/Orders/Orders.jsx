import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Order.css'
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const handelProductRemove = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        handelProductRemove={handelProductRemove}
                    ></Review>)
                }
            </div>
            <div>
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;