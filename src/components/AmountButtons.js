import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
    return (
        <Wrapper className='amount-btns'>
            <button type='button' className='amount-btn' onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className='amount'>{amount}</h2>
            <button type='button' className='amount-btn' onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-bottom:0px;
  display: grid;
  grid-template-columns: 30px 30px 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  button{
      background: transparent;
      border: none;
      width: 20px;
      cursor:pointer;
  }
  h2{
      width: max-content;
      margin-bottom: 0px;
  }
`

export default AmountButtons