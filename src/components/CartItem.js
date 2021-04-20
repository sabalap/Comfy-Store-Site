import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext()
    const increase = () => {
        toggleAmount(id, 'inc')
    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }
    return (
        <React.Fragment>
            <Wrapper>
                <div className='title'>
                    <img src={image} alt={name} />
                    <div>
                        <h5 className='name'>{name}</h5>
                        <p className='color'>
                            color : <span style={{ background: color }}></span>
                        </p>
                        <h5 className='price-small'>{formatPrice(price)}</h5>
                    </div>
                </div>
                <h5 className='price'>{formatPrice(price)}</h5>
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
                <button
                    type='button'
                    className='remove-btn'
                    onClick={() => removeItem(id)}
                >
                    <FaTrash />
                </button>
            </Wrapper>
            <div className="underline"></div>
        </React.Fragment>
    )
}

const Wrapper = styled.article`
display: grid;
grid-template-columns: 316px 1fr 1fr 1fr 1fr;
text-align: center;
    align-items: center;
    grid-template-rows: 150px;
padding: 30px 0px;
.title{
    display: grid;
    grid-template-columns: 100px auto;
    align-items: center;
    > div {
        text-align: start;
        margin-left:10px;
    }
    p{
        text-transform:capitalize;
    }
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
    img{
        width:100%;
        border-radius:var(--radius);
        height: 150px;
        object-fit: cover;
    }
}
.price-small{
    display:none;
}
.remove-btn{
    color: var(--clr-white);
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: var(--radius);
    font-size: 0.75rem;
}
.color{
    margin-bottom:0px;
}
.price{
    margin-bottom:0px;
    font-size: 1rem;
    color: var(--clr-primary-5);
    font-weight: 400;
}
.subtotal{
margin-bottom:0px;
color: var(--clr-grey-5);
    font-weight: 400;
    font-size: 1rem;
}
@media (max-width:940px){
    grid-template-columns: 246px 1fr 1fr 1fr auto;
    grid-template-rows: 100px;
    img{
        height: 100px !important;
    }
    .price{
        display:none;
    }
}
@media (max-width:600px){
        grid-template-columns: 1fr;
        margin-bottom: 30px;
        p{
            text-align: center;
        }
        .subtotal{
            margin-bottom:10px;
        }
        .amount-btns{
            margin-bottom:10px;
            margin-top:10px;
        }
        .title{
            grid-template-columns: 1fr;
            margin-bottom: 50px;
            img{
                width: 50%;
                margin: 0 auto;
            }
            > div{
                margin: 10px auto;
            }
        }
}
`

export default CartItem