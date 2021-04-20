import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: "" }] }) => {
    const [main, setMain] = useState(images[0]);
    return (
        <Wrapper>
            <img src={main.url} alt="main image" className="main" />
            <div className="gallery">
                {images.map((image, index) => {
                    return <img
                        src={image.url}
                        alt={image.filename}
                        key={index}
                        onClick={() => setMain(images[index])}
                        className={`${image.url === main.url ? "active" : null}`}
                    />
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.main{
    height:500px;
    width: 100%;
    border-radius: var(--radius);
    object-fit: cover;
}
.gallery{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
    grid-gap: 15px;
    img{
        height:75px;
        width:100%;
        object-fit: cover;
        grid-gap: 15px;
        border-radius: var(--radius);
        cursor: pointer;
    }
    .active{
        border: 2px solid var(--clr-primary-5);
    }
}
`
export default ProductImages