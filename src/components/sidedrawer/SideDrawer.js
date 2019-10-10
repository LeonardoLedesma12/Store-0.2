import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <div className={drawerClasses}>
      <div>
        <Link to='/About' className='side-drawer-link'>
          <span className='menu-text'>Nosotros</span>
        </Link>
        <Link to='/Gallery' className='side-drawer-link'>
          <span className='menu-text'>Productos</span>
        </Link>
        <Link to='/Contact' className='side-drawer-link'>
          <span className='menu-text'>Contacto</span>
        </Link>
      </div>
    </div>
  );
};

export default sideDrawer;
