import React, { Component } from 'react';
import './Car.css';

class Car extends Component{
  render () {
    return (
      <div className='container-car'>
        <div className='content-car'>
          <div className='card-container-title'>
            <h2 className='text-car'>Carrito de Compras</h2>
          </div>
        </div>
        <div className='content-car2'>
          <div className='card-container'>
            <div className='card-content'>
              <div className='card-row'>
                <div>
                  <img className='img-card' src='https://karimzerguinedesign.com/wp-content/uploads/bfi_thumb/a-dscf9649-mzqk78rn5bojhwxjyni0oj1dui1lqz7mo35r6h4tvo.jpg' alt='' />
                </div>
                <div className='text-card'>
                  <p className='p-t'>Mesa para Comedor (Caoba)</p>
                  <p className='classificationBody'>
                    Descripcion
                  </p>
                </div>
                <div className='price-card'>
                  <p className='p-t'>$229.00</p>
                  <p>Cantidad: 1 </p>
                  <p className='delete'>Quitar</p>
                </div>
              </div>
              <div className='card-row3'>
                <input type='checkbox' />
                <div className='margin-card'>
                  <span className='weight'>
                    Agregar un mensaje de regalo personalizado.
                  </span>
                  <br/>
                  <span className='size-term'>
                    Se incluirá una tarjeta impresa con su mensaje en el pedido. Los precios no se mostrarán.
                  </span>
                  <br/>
                  <span className='link-a'>Aprende más</span>
                </div>
              </div>
            </div>
            <div className='card-content2'>
              <div className='card-row2'>
                <p className='p-t2'>Subtotal</p>
                <p className='p-t2'>$229.00 </p>
              </div>
              <div className='card-col'>
                <button className='buton'>Proceder al Pago</button>
                <p className='buton-text'>Los impuestos y el envío se calcularán al finalizar la compra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
