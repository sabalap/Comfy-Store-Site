import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
const FeaturedProducts = () => {
    const {
        products_loading: loading,
        products_error: error,
        featured_products: featured
    } = useProductsContext();
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <Wrapper>
            <div className="container">
                <div className="title">
                    <h2>featured products</h2>
                    <div className="underline"></div>
                </div>
                <div className="images-container">
                    {featured.slice(0, 3).map((product) => {
                        return <Product key={product.id} {...product} />
                    })}
                </div>
                <div className="button">
                    <Link to="/products">
                        all products
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
background: var(--clr-grey-10);
padding:60px;
text-align:center;
.underline{
    margin:0 auto;
}
.title{
    margin-bottom:70px;
}
.images-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    img{
        height:225px;
        width:100%;
        object-fit: cover;
    }
}
.button{
    margin-top:80px;
    margin-bottom:30px;
    a{
        background: var(--clr-primary-5);
        color: var(--clr-primary-10);
        text-transform: uppercase;
        padding: 7px 20px;
        border-radius: var(--radius);
        transition:var(--transition);
        letter-spacing:var(--spacing);
        &:hover{
            opacity:0.8;
            color:black;
        }
    }
}
@media (max-width:990px) {
.images-container{
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
}
}
}
@media (max-width:540px) {
    .images-container{
        grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    }
}
@media (max-width:435px) {
    padding:30px;
    .images-container{
        grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
        img{
            height: 180px;
        }
    }
}
`
export default FeaturedProducts;