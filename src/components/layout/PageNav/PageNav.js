import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
    <nav>
        <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='acitve'>Home</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='acitve'>Login</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='acitve'>Kitchen</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='acitve'>Ordering</NavLink>
        <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='acitve'>Tables</NavLink>
    </nav>
)

export default PageNav;