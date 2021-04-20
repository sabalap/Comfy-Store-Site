import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
    const {
        filtered_products: products,
        grid_view,
        setGridView,
        setListView,
        sort,
        updateSort,
    } = useFilterContext()
    return (
        <Wrapper>
            <div className='btn-container'>
                <button
                    type='button'
                    className={`${grid_view ? 'active' : null}`}
                    onClick={setGridView}
                >
                    <BsFillGridFill />
                </button>
                <button
                    type='button'
                    className={`${!grid_view ? 'active' : null}`}
                    onClick={setListView}
                >
                    <BsList />
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form className="sort">
                <label htmlFor='sort'>sort by</label>
                <select
                    name='sort'
                    id='sort'
                    className='sort-input'
                    value={sort}
                    onChange={updateSort}
                >
                    <option value='price-lowest'>price (lowest)</option>
                    <option value='price-highest'>price (highest)</option>
                    <option value='name-a'>name (a-z)</option>
                    <option value='name-z'>name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom:35px;
    .btn-container button:first-of-type{
        margin-right:8px;
        background: transparent;
        color: var(--clr-black);
        border:none;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: var(--radius);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid var(--clr-black);
    }
    .btn-container button:last-of-type{
        background: transparent;
        border: 1px solid var(--clr-black);
        color: var(--clr-black);
        width: 1.5rem;
        border-radius: var(--radius);
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .btn-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-right:30px;
        .active{
        background:black !important;
        color:white !important;
    }
    }
    p{
        margin-bottom:0px;
        text-transform: capitalize;
        color: var(--clr-grey-3);
        font-size:1rem;
        margin-right: 30px;
    }

    .sort{
        margin-left:30px;
        text-transform: capitalize;
        label{
        margin-right:10px;
        }
        select{
            background: transparent;
            border: none;
            text-transform: capitalize;
            font-size: 1rem;
        }
    }
    @media (max-width:845px) {
        .btn-container button:last-of-type{
            display:none;
        }
    }
    @media (max-width:525px) {
        grid-template-columns: 1fr;
        text-align: center;
        .btn-container{
            grid-template-columns: 1fr;
            margin-right: 0px;
            margin: 0 auto;
        }
        p{
            margin:5px auto
        }
        .sort{
            margin: 10px auto;
            label{
                margin-right:0px;
            }
        }
    }
`

export default Sort