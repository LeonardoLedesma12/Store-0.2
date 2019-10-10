import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='container-about'>
        <div className='content-about'>
          <div className='title-about'>
            <h3 className='p-about'>
              DE MADERA, ACERO Y RAICES: KARIM ZERGUINE
            </h3>
          </div>
          <div className='container-img-a'>
            <div className='content-a'>
              <img
                className='img-a'
                src={'https://karimzerguinedesign.com/wp-content/uploads/2015/05/KZD-6-1024x683.jpg'}
                alt=''
              />
            </div>
            <div className='content-a'>
              <p className='p-autor'>Autor</p>
              <p className='p-bg'>
                “Busco crear espacios atemporales, más allá de tendencias y moda,
                sin pensar en femenino o masculino, tratando  siempre de resaltar
                el balance y la armonía. Retomo la esencia y belleza propia que
                se esconde en objetos naturales como troncos, ramas, raíces y
                rocas que encuentro en los más recónditos sitios de Asia.
                Me apasiona crear y diseñar piezas que fusionan la cálida y recia
                madera con lo tenaz y frio del acero¨
              </p>
              <p className='p-text'>
                Afán vanguardista e innovador y un ingenio con el que no se cansa
                de sorprendernos, definen las creaciones y el trabajo de Karim
                Zerguine quien hace más de dos décadas comenzó su trayecto diseñando
                interiores en las más afamadas tiendas parisinas. Viajando y conociendo
                diferentes culturas y lugares tan exóticos como Indonesia, Thailandia,
                Birmania, pudo encontrar un nuevo horizonte estético.
              </p>
            </div>
          </div>
          <div className='s-p'>
            <p className='p-autor'>Sentido</p>
            <p className='p-text'>
              Amante de la simplicidad, de transformar volúmenes, de las materias
              nobles y reciclables y de combinar paletas de colores, Karim Zerguine,
              con ojo agudo y perfeccionando detalles, logra  transformar la vida,
              creando atmósferas que se vuelven imprescindibles.<br></br> Hasta
              las sombras de sus piezas hacen equilibrio. Destilan paz, sencillez y belleza.
            </p>
          </div>
          <div className='s-p2'>
            <p className='p-autor'>CONCEPCIÓN – DISEÑO</p>
            <p className='p-text'>
              El tiempo y la continuidad son para él materia prima. Sabe que una pieza
              puede tardar años en desarrollarse desde que la encuentra hasta que la
              transporta a su taller en San Pedro Garza, Monterrey, México, y empieza
              a trabajarla. Reconoce que no todo el trabajo es propio: la naturaleza,
              el viento, la lluvia y el calor contribuyen erosionando y dando formas
              irrepetibles a cada pieza. Sin embargo, es con su talento y paciencia
              sin pausas que las vetas y los colores ocultos brotan de las piezas
              concebidas. Destellan de manera admirable, enalteciendo el espiritu y el alma.
            </p>
          </div>
          <div className='title-about'>
            <h3 className='p-about'>
              ALGUNOS CUMPLIMIENTOS
            </h3>
          </div>
          <div className='center-a'>
            <img
              className='img-pd'
              src={'https://karimzerguinedesign.com/wp-content/uploads/bfi_thumb/untitled023-mosp7nv10lo2hgl04zxvvm4b1zkwh07hcqjtojtz7s.jpg'}
              alt=''
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
