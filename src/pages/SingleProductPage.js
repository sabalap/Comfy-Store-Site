import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct
    } = useProductsContext();
    useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
    }, [id])
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push("/")
            }, 3000)
        }
    }, [error])
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    const {
        name,
        price,
        description,
        stock,
        stars,
        reviews,
        id: sku,
        company,
        images
    } = product
    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className="container">
                <div className="back">
                    <Link to="/products" className="btn">
                        back to products
                </Link>
                </div>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="desc"> {description}</p>
                        <p className="info">
                            <span>Available : </span>
                            {stock > 0 ? "In stock" : "out of stock"}
                        </p>
                        <p className="info">
                            <span>SKU : </span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.main`
.btn{
    padding: 10px;
    font-size: .875rem;
}
.product-center{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    margin-top: 50px;
}
.price{
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin-bottom:15px;
}
.desc{
    line-height: 2;
    color: var(--clr-grey-3);
    font-size: 1rem;
}
p{
    font-weight: 400;
    font-size: 1rem;
    color: var(--clr-grey-3);
    text-transform: capitalize;
span{
    font-weight: 700;
    color: var(--clr-grey-3);
    font-size:1rem;
    margin-right: 30px;
}
}
padding-bottom: 80px;
@media (max-width:900px){
.product-center{
    grid-template-columns: 1fr;
}
.content{
    text-align: center;
}
.stars{
    justify-content:center;
}
.colors{
    justify-content: center;
}
.btn-container{
    justify-content: center;
}
}
@media (max-width:500px){
    .gallery{
        img{
            height:50px;
        }
    }
    .back{
        display: flex;
        justify-content: center;
    }
}
`
export default SingleProductPage;