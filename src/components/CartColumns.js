import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
    return (
        <Wrapper>
            <div className='content'>
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <h5>delete</h5>
            </div>
            <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
.content{
display: grid;
    grid-template-columns: 316px 1fr 1fr 1fr 1fr;
    justify-items: center;
h5{
    text-align:center;
    color: var(--clr-grey-5);
    font-weight: 400;
}
}
@media (max-width:940px) {
    display:none;
}
`

export default CartColumns