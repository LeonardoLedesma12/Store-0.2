import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className='panel-wrapper'>
              <div className='half' style={{width: '60%'}}>
                <div className='full'>
                  <img className='img1, media' src={'https://karimzerguinedesign.com/wp-content/uploads/bfi_thumb/a-dscf9649-mzqk78rn5bojhwxjyni0oj1dui1lqz7mo35r6h4tvo.jpg'} alt=''/>
                </div>
              </div>
              <div className='details' style={{width: '39%'}}>
                <div className='product-detail'>
                  <h1>
                    <span className='small'>
                      num. de serie
                    </span>
                    <p className='product-name'>
                      Nombre del producto
                    </p>
                  </h1>
                  <h2 className='price'>
                    $25,000
                  </h2>
                  <p className='classificationBody2'>
                    Descripcion de producto
                  </p>
                </div>
                <div>
                  <div>
                    <p style={{margin: '25px'}}>Color</p>
                  </div>
                  <div className='cta2'>
                    <p className='boton2'>Comprar Ahora</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginTop: '60px'}}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
