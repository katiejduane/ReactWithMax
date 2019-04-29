import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo height="80%"/>
        <nav className ="DesktopOnly">
            <NavItems />
        </nav>
    </header>
)

export default toolbar;