import React, { Component } from 'react';
import firebaseConf from '../../Firebase';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message },
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('Contact').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email, message } = snapshot.val();
      const data = { name, email, message };
      this.setState({ form: [data].concat(this.state.form) });
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const params = { name: this.inputName.value, email: this.inputEmail.value, message: this.inputMessage.value };
    if (params.name && params.email && params.message) {
      firebaseConf.database().ref('Contact').push(params).then(()=> {
        this.showAlert('success', 'Tu mensaje ha sido procesado');
      }).catch(()=> {
        this.showAlert('danger', 'Tu mensaje no se puede enviar por errores externos');
      });
      this.resetForm();
    }else {
      this.showAlert('warning', 'tienes campos sin llenar,completalos e intentalo de nuevo');
    }
  }

  render () {
    return (
      <div>
        <div className='container_Contact'>
          <div className='title_Contact'>
            <div className='direction_title_Contact'>
              <h1 className='title_big_Contact'>programe una cotizacion</h1>
            </div>
          </div>
          <div className='information_Contact'>
            <div className='information_row'>
              <div className='information_txt_Contact'>
                <p className='txt_size_Contact'>Karim Zerguine Design <br/> y Espacio Libertad</p>
                <br/>
                <p className='txt_color_Contact'>Libertad No. 424 Ote</p>
                <p className='txt_color_Contact'>Col. Centro de San Pedro</p>
                <p className='txt_color_Contact'>CP 66200 San Pedro Garza <br/>García.</p>
                <p className='txt_color_Contact'>MÉXICO</p>
                <p className='txt_color_Contact'>karim@karimzerguinedesign.com</p>
              </div>
            </div>
            <form onSubmit={this.sendMessage.bind(this)} ref='contactForm'className='content_Contact'>
              <div className='width_content_Contact'>
                <div className='dir_content_Contact'>
                  <input type='text' id='name' ref={name => this.inputName = name} placeholder='NOMBRE' className='txt_input'/>
                  <input type= 'email' id='email' ref={email => this.inputEmail = email} placeholder='E-MAIL' className='txt_input'/>
                </div>
                <textarea type= 'text' id='message' ref={message => this.inputMessage = message} placeholder='MENSAJE' className='message_Contact'/>
                <input placeholder='INGRESAR CAPTCHA' className='height_last_div'/>
                <div className='height_last_div'>
                  <input type='checkbox' name='terms' value='terms' />
                </div>
                <button type='submit' className='height_last_div'>
                 ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='ubication_Contact'>
          <div className='title_ubication_Contact'>
            <div className='txt_Ubication_Contact'>
              <h1 className='title_big_Ubication'>Ubicacion Principal</h1>
            </div>
          </div>
          <div className='image_ubication_Contact'>
            <div className='place_ubication'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
