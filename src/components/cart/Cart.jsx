import {useSelector} from 'react-redux';
import './Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItems = useSelector((state)=>state.cart.items);
    return(
        <div className='cart'>
            <h2>Your Shopping Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.name,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                  }}
                />
              ))}
            </ul>
        </div>
    )
}

export default Cart;