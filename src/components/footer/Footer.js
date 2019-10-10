import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
  render () {
    return (
      <div>
        {/*<div className='container_Footer'>
          <div className='content_Footer'>
            <div className='txt_Footer'>
              <div className='txtContainer_Footer'>
                <p className='txtColor_Footer'>karim zerguine design</p>
                <p className='txtColor_Footer'>Libertad nº 424 Ote</p>
                <p className='txtColor_Footer'>Col. Centro de San Pedro</p>
                <p className='txtColor_Footer'>CP 66200 San Pedro Garza García</p>
                <p className='txtColor_Footer'>MÉXICO</p>
              </div>
            </div>
          </div>
        </div>*/}
        <div className='spam_Footer'>
          <p className='txtColor_Spam'>
            © 2015 KARIM ZERGUINE DESIGN ALL RIGHTS RESERVED.
            Web design https://spielben.com
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
