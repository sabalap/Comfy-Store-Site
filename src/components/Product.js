import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({ image, name, price, id }) => {
    return (
        <Wrapper>
            <div className="header">
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className="link">
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>
        </Wrapper>
    )
}
const Wrapper = styled.article`
.header {
    background: var(--clr-black);
    position:relative;
    border-radius: var(--radius);
    img{
        border-radius: var(--radius);
        display:block;
        transition:var(--transition);
        height:175px;
    }
    .link{
        background: var(--clr-primary-5);
        position:absolute;
        top:50%;
        left:50%;
        color:white;
        width:40px;
        height:40px;
        border-radius:50%;
        transform:translate(-50%,-50%);
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0;
        transition:var(--transition);
    }
    svg{
        font-size:19px;
    }
}
.header:hover {
    .link{
        opacity:1;
    }
    img{
        opacity:0.5;
        border-radius: var(--radius);
    }
}
footer{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5{
        margin-bottom:0px;
        font-weight: 400;
    }
    p{
        margin-bottom:0px;
        color: var(--clr-primary-5);
        letter-spacing: var(--spacing);
        font-weight: 400;
        font-size:1rem;
    }
}
`
export default Product