import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <Wrapper>
            <div className='products-container'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.products-container{
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-gap: 30px;
    img{
        width: 100%;
        object-fit: cover;
    }
}
@media (max-width:990px){
    .products-container{
    grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width:820px){
    .products-container{
    grid-template-columns: 1fr;
    }
}
`
export default GridView;