import React from "react";
import styled from "styled-components";
const Footer = () => {
    return (
        <FooterWrapper>
            <h5>&copy; 2021
            <span> ComfySloth </span>
            </h5>
            <h5>All rights reserved</h5>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
h5{
    font-weight: 400;
    line-height:1.2rem;
    font-size:1rem;
    margin-bottom:0px;
}
display: flex;
    justify-content: center;
text-align:center;
background: var(--clr-black);
padding:35px;
color: var(--clr-white);
span{
    color: var(--clr-primary-5);
    margin-right:7px;
}
`
export default Footer;