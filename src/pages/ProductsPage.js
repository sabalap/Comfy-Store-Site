import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
    return (
        <main>
            <PageHero title='products' />
            <div className="container">
                <Wrapper>
                    <div className='filters-products'>
                        <Filters />
                        <div>
                            <Sort />
                            <ProductList />
                        </div>
                    </div>
                </Wrapper>
            </div>
        </main>
    )
}
const Wrapper = styled.section`
.filters-products{
    display: grid;
    grid-template-columns: 225px auto;
    grid-gap: 10px;
    padding-bottom: 50px;
}
@media (max-width:845px) {
    .products-container{
        grid-template-columns: 1fr;
    }
}
@media (max-width:756px){
    .filters-products{
        grid-template-columns: 1fr;
    }
}
`
export default ProductsPage;