import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
    const { total_amount, shipping_fee, clearCart } = useCartContext()
    const { myUser, loginWithRedirect } = useUserContext()

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>
                        subtotal : <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p>
                        shipping fee : <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h4>
                        order total :{' '}
                        <span>{formatPrice(total_amount + shipping_fee)}</span>
                    </h4>
                </article>
                {myUser ? (
                    <div className="buy-btn">
                        <Link to='/completed' className='btn buy' onClick={clearCart}>
                            Buy
                        </Link>
                    </div>
                ) : (
                    <button type='button' className='btn' onClick={loginWithRedirect}>
                        login
                    </button>
                )}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top:30px;
> div{
    max-width: 450px;
    margin-left: auto;
    padding:20px;
    h5,p,h4{
        display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    }
    h4{
        margin-top:30px;
    }
}
article{
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
    margin-bottom:20px;
}
.btn{
    width: 100%;
    padding: 8px;
}
.buy-btn{
    text-align: center;
}
.buy{
    padding: 10px 80px;
}
@media (max-width:620px){
    > div {
        margin: 0 auto;
    }
}
`

export default CartTotals