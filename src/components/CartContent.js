import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
    return (
        <Wrapper className="container">
            <CartColumns />
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <div className='link-container'>
                <Link to='/products' className='link-btn btn'>
                    continue shopping
                </Link>
                <button
                    type='button'
                    className='link-btn clear-btn'
                    onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .underline{
      width: 100%;
      height: 1px;
  }
  .link-container{
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .link-btn{
          padding: 6px;
          text-transform:capitalize;
          color: var(--clr-white);
          border-radius: var(--radius);
          letter-spacing: var(--spacing);
          font-weight: 400;
          cursor: pointer;
      }
      .clear-btn{
          background: var(--clr-black);
          text-transform: capitalize;
          cursor: pointer;
          color: var(--clr-white);
          border-radius: var(--radius);
          letter-spacing: var(--spacing);
          font-weight: 400;
          border:none;
          font-size: 1rem;
          transition:var(--transition);
          &:hover{
              opacity:0.8;
          }
      }
  }
  @media (max-width:600px){
      h4{
          font-size: 1rem;
      }
      padding:15px;
      .link-container{
          grid-template-columns: 1fr;
          display: grid;
          text-align: center;
          a,button{
              width: 50%;
              margin: 10px auto;
          }
      }
  }
`
export default CartContent