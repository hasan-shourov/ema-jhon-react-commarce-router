import React from 'react';
import { Link } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducs from '../Hooks/UseProducs';
import ReviewItem from '../reviewItem/ReviewItem';
import {useHistory} from 'react-router-dom';

const OrderReview = () => {
    const [products, setProducts] = useProducs()
    const [cart, setCart] = useCart(products)
    const history = useHistory()

    const HandleRemove = (key) =>{
        const newCart = cart.filter(product =>product.key !== key);
        setCart(newCart)
        removeFromDb(key)
    }

    const takeOrder =() => {
            history.push('/placeorder')
            setCart([])
            clearTheCart()
    }
    return (
        <div>
            <h2>This is Order Review {cart.length}</h2>
            <h3>{products.length}</h3>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem product ={product}
                            HandleRemove ={HandleRemove}
                             key={product.key}></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        
                        <button className="btn-regular" onClick={takeOrder}>Place Order</button>
                        
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;