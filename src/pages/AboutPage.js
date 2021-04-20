import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
    return (
        <React.Fragment>
            <PageHero title="About" />
            <AboutWrapper>
                <div className="container">
                    <img src={aboutImg} alt="about img" />
                    <div>
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Temporibus quam animi deserunt perferendis dolores doloremque,
                        ex harum aliquam, fugiat odit nisi laborum laboriosam molestiae vero optio
                        maxime natus id iste, nulla quaerat consectetur perspiciatis libero itaque
                        possimus. Delectus alias ex earum impedit tenetur excepturi!
                        Adipisci repellendus a cumque consequatur sed?
                    </p>
                    </div>
                </div>
            </AboutWrapper>
        </React.Fragment>
    )
}
const AboutWrapper = styled.div`
padding-bottom: 80px;
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
}
img{
    height: 500px;
    object-fit: cover;
    width: 100%;
    border-radius:var(--radius);
}
h2{
    margin-bottom:10px;
}
p{
    color: var(--clr-grey-5);
    line-height: 2;
    margin-top:35px;
}
@media (max-width:860px) {
    img{
        height:400px;
    }
}
@media (max-width:620px) {
    .container{
        grid-template-columns: 1fr;
        text-align:center;
        .underline{
            margin: 0 auto;
        }
    }
}
`
export default AboutPage;