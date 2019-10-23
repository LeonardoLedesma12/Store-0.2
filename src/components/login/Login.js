import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
  render () {
    return (
      <div className='container_login'>
        <div className='content_login'>
          <h1 className='txt_login'>Inicia sesión</h1>
          <input type='Email'placeholder='Correo electronico' className='data_login'/>
          <input type='Password' placeholder='Contraseña' className='data_login'/>
          <button className='data_login'>
            Entrar
          </button>
          <p className='txt_end'>si no te haz registrado, crea una cuenta</p>
        </div>
      </div>
    );
  }
}

export default Login;
