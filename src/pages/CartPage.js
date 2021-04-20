import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
    const { cart } = useCartContext()
    if (cart.length < 1) {
        return (
            <div className="container">
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link to="/products">
                        <button className="fill-it btn">FILL IT</button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <main>
            <PageHero title='cart' />
            <Wrapper className='page'>
                <CartContent />
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
 
`

export default CartPage