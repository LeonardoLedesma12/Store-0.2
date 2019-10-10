import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
// import logo from '../../assets/logo2.png';
import DrawerToggleButton from '../sidedrawer/DrawerToggleButton';

const Nav = props => (
  <div>
    <div className='navbar'>
      <div className='navbar-navigation'>
        <div>
          <Link to='/'>
            <img className='logo' src={'https://karimzerguinedesign.com/wp-content/uploads/2015/12/KarimZerguineLogo_400px_Artboard-HD-copy.png'} alt=''/>
          </Link>
        </div>
        <div>
          <Link to='/About' className='navbar-navigation-items'>
            <span>Acerca de Nosotros</span>
          </Link>
          <Link to='/Products' className='navbar-navigation-items'>
            <span>Productos</span>
          </Link>
          <Link to='/Contact' className='navbar-navigation-items'>
            <span>Contacto</span>
          </Link>
        </div>
        <div className='toolbar_toggle_button'>
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
