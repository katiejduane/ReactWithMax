import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
    // conditionally attach CSS classes
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"]
    }

    return (
      <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(" ")}>
          <div className="SideDrawerLogo">
            <Logo />
          </div>
          <nav>
            <NavItems />
          </nav>
        </div>
      </Aux>
    );

}

export default sideDrawer;