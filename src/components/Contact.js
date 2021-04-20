import React from "react";
import styled from "styled-components";
const Contact = () => {
    return (
        <Wrapper>
            <div className="container">
                <h3>Join our newsletter and get 20% off</h3>
                <div className="text-form">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem quis corporis provident repudiandae
                        cumque qui ut necessitatibus minima at hic.
                    </p>
                    <form
                        className="contact-form"
                        action="https://formspree.io/f/mvodozpp"
                        method="POST">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="enter email"
                            name="_replyto"
                        />
                        <button type="submit" className="submit-btn">
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
padding-top: 250px;
padding-bottom:200px;
h3{
    margin-bottom:45px;
}
p{
    font-size:1rem;
    line-height: 2rem;
    margin-bottom:0px;
}
.text-form{
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 120px;
    align-items: center;
}
.contact-form{
    display: grid;
    grid-template-columns: auto auto;
    height:40px;
    input{
        border:2px solid black;
        font-size:16px;
        color: var(--clr-grey-3);
        border-radius:var(--radius);
        text-transform:capitalize;
        width:380px;
        max-width:100%;
        padding:10px 20px;
    }
    button{
        background: var(--clr-primary-5);
        text-transform:capitalize;
        padding:15px 35px;
        border:2px solid black;
        border-radius:var(--radius);
        font-size: 1rem;
        transition:var(--transition);
        cursor:pointer;
        margin-left:-4px;
        &:hover{
            color:white;
        }
    }
}
@media (max-width:990px){
    .container{
        h3{
            text-align: center;
        }
    }
    .text-form{
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 40px;
    }
    .contact-form{
        grid-template-columns: 1fr;
        input{
            margin: 0 auto;
        }
        button{
            width: 380px;
            margin: 20px auto;
        }
    }
}
@media (max-width:450px) {
    .text-form{
        p{
            font-size: 14px;
        }
        input,button{
            width: 270px;
        }
    }
    padding-bottom: 120px;
    padding-top: 130px;
}
`
export default Contact;