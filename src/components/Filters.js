import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
    const {
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            price,
            max_price,
            shipping,
        },
        updateFilters,
        clearFilters,
        all_products,
    } = useFilterContext()

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')

    return (
        <Wrapper>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Search" className="search" />
                <div className="category">
                    <h5>Category</h5>
                    {categories.map((c, index) => {
                        return (
                            <button
                                key={index}
                                onClick={updateFilters}
                                type="button"
                                name="category"
                                className={`${category === c.toLowerCase() ? "active" : null}`}
                            >
                                {c}
                            </button>
                        )
                    })}
                </div>
                <div className="company">
                    <h5>company</h5>
                    <select
                        name="company"
                        value={company}
                        onChange={updateFilters}
                        className="company"
                    >
                        {companies.map((c, index) => {
                            return (
                                <option value={c} key={index}>
                                    {c}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="colors">
                    <h5>colors</h5>
                    <div>
                        {colors.map((c, index) => {
                            if (c === "all") {
                                return (
                                    <button
                                        key={index}
                                        name="color"
                                        onClick={updateFilters}
                                        data-color="all"
                                        className={`${color === "all" ? "all-btn active" : "all-btn"}`}>
                                        all
                                    </button>
                                )
                            }
                            return (
                                <button
                                    key={index}
                                    name="color"
                                    style={{ background: c }}
                                    className={`${color === c ? "color-btn active" : "color-btn"}`}
                                    data-color={c}
                                    onClick={updateFilters}>
                                    {color === c ? <FaCheck /> : null}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="price">
                    <h5>price</h5>
                    <p className="price">{formatPrice(price)}</p>
                    <input
                        type="range"
                        name="price"
                        min={min_price}
                        max={max_price}
                        onChange={updateFilters}
                        value={price}
                    />
                </div>
                <div className="shipping">
                    <label htmlFor="shipping"> free shipping</label>
                    <input
                        type="checkbox"
                        name="shipping"
                        id="shipping"
                        onChange={updateFilters}
                        checked={shipping}
                    />
                </div>
            </form>
            <div className="clear">
                <button
                    type="button"
                    className="clear-btn"
                    onClick={clearFilters}
                >
                    {" "}
                    clear filters
                </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
height: max-content;
    position: sticky;
    top: 1rem;
form{
    width: 225px;
}
.search{
    background: var(--clr-grey-10);
    font-size:15px;
    padding:10px 8px;
    border:none;
    width: 190px;
    border-radius:var(--radius);
    margin-bottom:20px;
}
.category{
    color: var(--clr-grey-1);
    line-height: 1.5;
    margin-bottom:25px;
    button{
        display:block;
        background:transparent;
        border:none;
        margin-bottom:10px;
        font-size: 1rem;
        text-transform: capitalize;
        color: var(--clr-grey-5);
        cursor:pointer;
        transition:var(--transition);
        &:hover{
            opacity:0.7
        }
    }
    .active {
    border-bottom: 1.5px solid var(--clr-grey-5);
  }
}

.company{
    h5{
        margin-bottom:10px;
        }
        select{
            background: var(--clr-grey-10);
            border-radius: var(--radius);
            border:none;
            padding:5px;
        }
        margin-bottom:12px;
}
.colors{
    margin-bottom:20px;
    .active {
    border-bottom: 1.5px solid var(--clr-grey-5);
  }
    div{
        display: flex;
    align-items: center;
    width: 160px;
    justify-content: space-between;
    button{
        color:white;
        font-size:9px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    }
    h5{
        margin-bottom:5px;
    }
    button{
        width: 1rem;
    height: 1rem;
    border-radius:50%;
    border: none;
    text-transform:uppercase;
    margin:5px;
    }
}
.all-btn{
    color:black !important;
    background:transparent;
    font-size:13px !important;
    border-radius:0% !important;
}
.price{
    h5{
        margin-bottom:2px;
    }
    p{
        margin-bottom:3px;
        font-size: 1rem;
    }
    input{
        margin-bottom:20px;
    }
}
.shipping{
    display: flex;
    align-items: center;
    text-transform: capitalize;
    label{
        margin-right:10px;
    }
    margin-bottom:20px;
}
.clear-btn{
    background: var(--clr-red-dark);
    color: var(--clr-white);
    border:none;
    padding:5px 8px;
    text-transform: capitalize;
    border-radius:var(--radius);
    letter-spacing: var(--spacing);
    cursor: pointer;
}
@media (max-width:756px){
    position:relative;
    top:0;
    margin-bottom: 30px;
    form{
        margin: 0 auto;
    text-align: center;
    .category{
        button{
            margin:10px auto;
        }
    }
    .colors{
        > div {
        margin: 0 auto 10px;
        }
    }
    .shipping{
        display: flex;
        justify-content: center;
    }
    }
    .clear{
        text-align: center;
    }
}
`
export default Filters