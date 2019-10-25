import React, { Component } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    return (
      <div>
        <div className='products-container'>
          <div className='box-right'>
    				<div className='content-products'>
    					<div className='slide-content'>
    						<p className='emph'>Productos</p>
    						<p className='detail'>UN ESPACIO MEJOR</p>
    					</div>
    				</div>
  			  </div>
        </div>

        <div className='col-md'>
          <Link to='/Detail' className='space'>
            <div>
              <div className='classificationHeading'>
                MUEBLE 1
              </div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'https://karimzerguinedesign.com/wp-content/uploads/bfi_thumb/a-dscf9649-mzqk78rn5bojhwxjyni0oj1dui1lqz7mo35r6h4tvo.jpg'} alt=''/>
            </div>
          </Link>
          <div className='space'>
            <div>
              <div className='classificationHeading'>
                MUEBLE 2
              </div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'http://www.actionc.info/wp-content/uploads/2018/10/mesas-de-madera-rusticas-fresh-luxury-mesa-madera-rustica-maesome-of-mesas-de-madera-rusticas.jpg'} alt=''/>
            </div>
          </div>
          <div className='space'>
            <div>
              <div className='classificationHeading'>MUEBLE 3</div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'http://www.actionc.info/wp-content/uploads/2018/10/construir-mesa-de-madera-rustica-beautiful-unique-mesa-madera-rustica-edor-maesome-of-construir-mesa-de-madera-rustica.jpg'} alt=''/>
            </div>
          </div>
          <div className='space'>
            <div>
              <div className='classificationHeading'>MUEBLE 4</div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'https://www.mobles-sedavi.com/39590/mesa-comedor-rustica-industrial-madera-1420-06.jpg?image=0'} alt=''/>
            </div>
          </div>
        </div>

        <div>
          <div className='rotatingText'>
            <p className='minHeading'>MESAS (CATEGORIA)</p>
            <p className='minDetail'>
              'Descripcion de la categoria.'
            </p>
          </div>
        </div>

        <div className='col-md'>
          <div className='space2'>
            <div>
              <div className='classificationHeading'>
                MESA 5
              </div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'https://karimzerguinedesign.com/wp-content/uploads/bfi_thumb/Interior-design-DSC_9111-mosrb91ndedj10wzks383m3pf6wzr0nr928ufeuddw.jpg'} alt=''/>
            </div>
          </div>
          <div className='space2'>
            <div>
              <div className='classificationHeading'>
                MESA 6
              </div>
              <p className='classificationBody'>
                Descripcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'https://cafeversatil.com/bricoydeco/wp-content/uploads/2019/08/01.jpg'} alt=''/>
            </div>
          </div>
          <div className='space2'>
            <div>
              <div className='classificationHeading'>MESA 7</div>
              <p className='classificationBody'>
                Descricpcion
              </p>
            </div>
            <div>
              <img className='img1, img-products' src={'https://cdn.portobellostreet.es/imagenes_muebles/Muebles-Mesa-de-comedor-Oregon-madera-reciclada.jpg'} alt=''/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Products;
