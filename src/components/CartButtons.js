import React from "react";
import styled from "styled-components";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
const CartButtons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items, clearCart } = useCartContext()
    const { loginWithRedirect, myUser, logout } = useUserContext()
    return (
        <CartWrapper className="cart-btn-wrapper">
            <Link className="cart-container" to="/cart" onClick={closeSidebar}>
                Cart
                <span className="icon-shopping">
                    <FaShoppingCart />
                    <div className="value">{total_items}</div>
                </span>
            </Link>
            {myUser ? (
                <button
                    type='button'
                    className='auth-btn'
                    onClick={() => {
                        clearCart()
                        localStorage.removeItem('user')
                        logout({ returnTo: window.location.origin })
                    }}
                >
                    Logout <FaUserMinus />
                </button>
            ) : (
                <button type='button' className='auth-btn' onClick={loginWithRedirect}>
                    Login <FaUserPlus />
                </button>
            )}
        </CartWrapper>
    )
}
const CartWrapper = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr auto;
    grid-gap: 30px;
    span{
        margin-top: 4px;
        margin-left:8px;
    }
    .cart-container{
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
       font-size:1.6rem;
       color: var(--clr-grey-1);
       .icon-shopping{
           position:relative;
       }
       .value{
           background: var(--clr-primary-5);
           width:20px;
           height:20px;
           border-radius:50%;
           font-size:12px;
           color:var(--clr-white);
           position:absolute;
           top:-7px;
           left:15px;
           display:flex;
           align-items:center;
           justify-content:center;
           padding:12px;
       }
    }
    .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons;