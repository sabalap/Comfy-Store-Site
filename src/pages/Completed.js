import React from "react";
import styled from "styled-components";
const Completed = () => {
    return (
        <Wrapper>
            <h2>Thank you!</h2>
            <h3>Your payment was successful</h3>
        </Wrapper>
    )
}
export default Completed;
const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
min-height:100vh;
`