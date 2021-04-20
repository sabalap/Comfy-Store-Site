import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
const Hero = () => {
    return (
        <div className="container">
            <Wrapper>
                <div className="content">
                    <h1>Design Your <br /> Comfort Zone</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quod vel quibusdam ratione velit
                        praesentium aspernatur esse aperiam itaque ea totam.
                </p>
                    <Link to="/products" className="btn">shop now</Link>
                </div>
                <div className="img-container">
                    <img src={heroBcg} alt="" className="main-img" />
                    <img src={heroBcg2} alt="" className="little-img" />
                </div>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.section`

padding-bottom:70px;
h1{
    margin-top: 90px;
    margin-bottom:40px;
}
.content{
    p{
        line-height: 2;
        font-size:1.1rem;
        color: var(--clr-grey-5);
        margin-bottom:60px;
    }
}
p{
line-height: 2;
font-size:1.1rem;
color: var(--clr-grey-5);
}
display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 160px;
    .img-container{
         position:relative;
    }
    .img-container:before{
        content:"";
        background: var(--clr-primary-9);
        width:10%;
        height:80%;
        position: absolute;
        bottom:0%;
        left:-7%;
        border-radius:var(--radius);
    }
.main-img{
    height:550px;
    width: 100%;
    object-fit: cover;
    display:block;
    border-radius:var(--radius);
    position:relative;
}
.little-img{
    width: 250px;
    position: absolute;
    bottom: 0px;
    left:-124px;
    border-radius:var(--radius);
}
@media(max-width:990px){
    .img-container{
        display: none;
    }
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0px 30px 100px;
}
`
export default Hero;