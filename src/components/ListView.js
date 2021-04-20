import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({ products }) => {
    return (
        <Wrapper>
            {products.map((product) => {
                const { id, image, name, price, description } = product
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h5 className='price'>{formatPrice(price)}</h5>
                            <p>{description.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.section`
  article{
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 30px;
      align-items: center;
      margin-bottom: 30px;
      img{
          width: 300px;
          height: 200px;
          object-fit: cover;
          border-radius: var(--radius);
      }
      p{
          font-size:1rem;
      }
  }
  .btn{
      font-size: 10px;
      padding: 5px;
  }
`

export default ListView