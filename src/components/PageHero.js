import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
    return (
        <Wrapper>
            <div className="container">
                <h3>
                    <Link to="/">Home</Link>
                    {product && <Link to="/products"> / Products</Link>} / {title}
                </h3>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
background: var(--clr-primary-10);
padding:30px 80px;
font-size: 1.7rem;
color: var(--clr-primary-1);
margin-bottom:50px;

a{
    transition:var(--transition);
   color: var(--clr-primary-3);
    &:hover{
        color: var(--clr-primary-1);
    }
}
@media (max-width:400px){
    padding: 30px;
    text-align: center;
}
`
export default PageHero;