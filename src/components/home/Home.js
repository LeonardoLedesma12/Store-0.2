import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='image_Home'>
        </div>
        <div className='container_Home'>
          <div className='content_title_Home'>
            <div className='direction_title_Home'>
              <h1 className='title_color_Home'>Bienvenido</h1>
            </div>
          </div>
          <div className='content_buttons_Home'>
            <div className='direction_buttons_home'>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Acerca de KSD</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Portafolio</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Tienda Conceptual</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Proceso de Trabajo</p>
              </div>
            </div>
            <div className='direction_buttons_home'>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Acerca de KSD</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Portafolio</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Tienda Conceptual</p>
              </div>
              <div className='buttons_Home'>
                <p className='direction_text_Home'>Proceso de Trabajo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
