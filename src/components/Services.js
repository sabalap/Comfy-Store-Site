import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
const Services = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="header">
                    <h3>Custom Furniture <br /> Built Only For You</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Accusamus nisi quasi consectetur ut delectus possimus nemo
                    </p>
                </div>
                <section className="services">
                    {services.map((service) => {
                        const { id, text, title, icon } = service;
                        return (
                            <article key={id} className="service">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </article>
                        )
                    })}
                </section>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
h3{
    line-height: 1.3;
}
.services{
    transform: translateY(10rem);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-gap: 40px;
    margin-top: -70px;
}
.service{
    background: var(--clr-primary-7);
    border-radius: var(--radius);
    padding:  40px;
    h4{
        color: var(--clr-primary-1);
    }
    p{
        color: var(--clr-primary-2);
        line-height: 1.8;
        font-size:1rem;
    }
    span{
        background: var(--clr-primary-10);
        color: var(--clr-primary-1);
        width:4rem;
        height:4rem;
        border-radius:50%;
        display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
        svg{
            font-size:40px;
        }
    }
}
padding:60px;
background: var(--clr-primary-10);
.header{
    display: grid;
    grid-template-columns: 1fr 1fr;
    h3{
        color: var(--clr-primary-1);
    }
    p{
        color: var(--clr-primary-3);
        line-height: 1.8;
        font-size:1rem;
    }
}
@media (max-width:990px){
    .services{
        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
}
@media (max-width:870px) {
    .header{
        grid-template-columns: 1fr;
        text-align: center;
    }
}
@media (max-width:540px) {
    .services{
        grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    }
}
@media (max-width:435px) {
    padding:30px;
    .services{
        grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
    }
}
`
export default Services;