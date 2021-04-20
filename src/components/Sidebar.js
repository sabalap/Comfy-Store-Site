import React from "react";
import logo from "../assets/logo.svg";
import { FaTimes } from 'react-icons/fa';
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext();
    return (
        <SidebarWrapper>
            <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
                <div className="sidebar-header">
                    <img src={logo} className="logo" alt="comfy sloth" />
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map(({ id, text, url }) => {
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <CartButtons />
            </aside>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.nav`
.sidebar {
    z-index:-1;
    transition:var(--transition);
    width:100%;
    height:100%;
    position:fixed;
    transform:translate(-100%);
    top:0;
    left:0;
    background: var(--clr-white);
    .sidebar-header{
        display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding:20px 40px;
    justify-items: end;
    img{
        margin-left: -10px;
        height: 45px;
    }
    .close-btn{
        color: var(--clr-red-light);
        font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    }
    }
}
.links{
        display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
        li{
    text-transform:capitalize;
    margin:15px 10px;
    a{
        color: var(--clr-grey-3);
        font-size: 1rem;
        padding:10px;
        letter-spacing: var(--spacing);
         transiton:var(--transition);
        &:hover{
            border-bottom: 2px solid var(--clr-primary-7);
        }
    }
        }
    }
.show-sidebar{
    z-index:999;
    transform:translate(0px);
}
@media (max-width:990px){
.cart-btn-wrapper{
display: flex;
    justify-content: center;
}
}
`
export default Sidebar;