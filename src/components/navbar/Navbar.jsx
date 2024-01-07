import React from 'react';
import './Navbar.css';
import CartButton from '../cart/CartButton';

const Navbar = (props) => {
    const dropdownChangeHandler = event => {
        props.onChangeFilter(event.target.value);
    }
    return(
        <div className='header'>
            <div className='co-header'>
            <h1>shopy</h1>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
                <option value="fragrances">fragrances</option>
                <option value="skincare">skincare</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home decoration</option>
            </select>
            </div>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;