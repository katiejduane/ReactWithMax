import React from 'react';
import './NavItems.css'
import NavItem from './NavItem/NavItem'

const navItems = () => (
    <ul className="NavItems">
        <NavItem link="/" exact>Burger Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
)



export default navItems;