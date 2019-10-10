import React, { Component } from 'react';
import './Registry.css';

class Registry extends Component{
  render () {
    return (
      <div className='registry-container'>
        <div className='registry-content'>
          <div className='r-card-container'>
            <div className='card-text-r'>
              <p className='size-text-name'>Nombre</p>
              <p className='size-text-create'>Crear tu cuenta de Nombre</p>
              <p>Ir a Tienda</p>
              <div className='row-re'>
                <input type='text' className='w-40' placeholder='Nombre'/>
                <input type='text' className='w-40' placeholder='Apellido'/>
              </div>
              <input type='email' className='w-100' placeholder='Correo'/>
              <p className='email'>
                Puedes usar letras, números y signos de puntuación
              </p>
              <div className='row-re'>
                <input type='text' className='w-40' placeholder='Contraseña' />
                <input type='text' className='w-40' placeholder='Confirmación'/>
              </div>
              <p className='email'>
                Usa 8 o más caracteres con una combinación de letras, números y símbolos
              </p>
              <textarea type='text' className='w-100 top' placeholder='Dirección' />
              <div className='center-b'>
                <button className='buton-r'>Siguiente</button>
              </div>
            </div>
            <div className='card-text-r2'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
