import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext()
    const { id, stock, colors } = product

    const [mainColor, setMainColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if (tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    return (
        <Wrapper>
            <div className='colors'>
                <span> colors : </span>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button
                                key={index}
                                style={{ background: color }}
                                className={`${mainColor === color ? 'color-btn active' : 'color-btn'
                                    }`}
                                onClick={() => setMainColor(color)}
                            >
                                {mainColor === color ? <FaCheck /> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='btn-container'>
                <AmountButtons
                    amount={amount}
                    increase={increase}
                    decrease={decrease}
                />
                <Link
                    to='/cart'
                    className='btn'
                    onClick={() => addToCart(id, mainColor, amount, product)}
                >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .colors{
      display: flex;
      margin-top:30px;
      margin-bottom: 30px;
      > div{
          display: flex;
          button{
              margin-right: 10px;
          }
      }
      span{
          margin-right: 60px;
          font-weight: 700;
          color: var(--clr-grey-3);
          font-size: 1rem;
          text-transform: capitalize;
      }
      .color-btn{
         border-radius: 50%;
         border: none;
         width: 1.5rem;
         height: 1.5rem;
         color:white;
         display: flex;
         align-items: center;
         justify-content: center;
         cursor: pointer;
      }
  }
  .btn{
      padding: 7px 20px;
      margin-top:20px;
  }
  .btn-container{
      display: grid;
    justify-content: flex-start;
  }
`
export default AddToCart