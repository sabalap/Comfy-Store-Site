import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { FaBars } from 'react-icons/fa'
import { useProductsContext } from "../context/products_context";

const Navbar = () => {
    const { openSidebar } = useProductsContext();
    return (
        <NavWrapper>
            <div className="container">
                <div className="navbar">
                    <Link to="/">
                        <img src={logo} alt="Comfy Sloth" />
                    </Link>
                    <button type="button" className="nav-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                    <ul className="nav-links">
                        {links.map((link) => {
                            const { id, url, text } = link
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <CartButtons />
                </div>
            </div>
        </NavWrapper>
    )
}
const NavWrapper = styled.nav`

.nav-links{
    display:none;
}
.cart-btn-wrapper{
    display:none;
}
.underline{
    opacity:0;
}
.navbar{
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    }
}
img{
    margin-left:-15px;
    width:175px;
}
.nav-toggle{
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    margin-left: auto;
    font-size: 25px;
}
a{
    color: var(--clr-grey-3);
}
@media (min-width:992px) {
    .nav-toggle{
        display:none;
    }
    .cart-btn-wrapper{
        display:grid;
    }
    .nav-links{
        display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
        li{
    text-transform:capitalize;
    margin:0 10px;
    a{
        color: var(--clr-grey-3);
        font-size: 1.1rem;
        padding:10px;
         transiton:var(--transition);
        &:hover{
            border-bottom: 2px solid var(--clr-primary-7);
        }
    }
        }
}
}
`
export default Navbar;