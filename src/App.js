import React, { Component } from 'react';
import { Routes } from './Routes';
import Nav from './components/nav/Nav';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  componentDidUpdate () {
    window.scroll(0, 0);
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !this.state.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className='nav-height-app'>
        <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div className='margin-top-app'/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
