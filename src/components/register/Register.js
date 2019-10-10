import React, { Component } from 'react';
import './Register.css';
import firebaseConf from '../../Firebase';

class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {},
    };
  }

  componentWillMount () {
    let formRef = firebaseConf.database().ref('Register').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, lastname, email, direction, password, num } = snapshot.val();
      const data = { name, lastname, email, direction, password, num };
      this.setState({ form: [data].concat(this.state.form) });
    });
  }

  resetForm() {
    this.refs.registertForm.reset();
  }

  sendMessage(e) {
    e.preventDefault();
    const params = { name: this.inputName.value, lastname: this.inputLastname.value, email: this.inputEmail.value, password: this.inputPassword.value, direction: this.inputDirection.value, num: this.inputNum.value };
    if (params.name && params.lastname && params.email && params.password && params.direction && params.num) {
      firebaseConf.database().ref('Register').push(params);
      this.resetForm();
    }
  }

  render() {
    return (
      <div className='container_register'>
        <div className='contenttxt_register'>
          <h1 className='txt_register'>Registrate para más</h1>
          <form ref='registertForm' onSubmit={this.sendMessage.bind(this)} className='direction_register'>
            <div className='data_register'>
              <h2 className='txt_register'>Registrate ahora!</h2>
              <input type='Email' id='email' ref={email => this.inputEmail = email} placeholder='Correo electrónico' className='inputsize_Register'/>
              <div className='personalData_Register'>
                <div className='personaldirection_Register'>
                  <input placeholder='Nombre' id='name' ref={name => this.inputName = name} className='inputlitsize_Register'/>
                  <input placeholder='Apellido' id='lastname' ref={lastname => this.inputLastname = lastname} className='inputlitsize_Register'/>
                </div>
                <input type='numbers' className='inputsize_Register' id='lastname' ref={num => this.inputNum = num} placeholder='teléfono'/>
                <input type='password' className='inputsize_Register' id='lastname' ref={password => this.inputPassword = password} placeholder='Crear contraseña'/>
              </div>
              <input placeholder='Direccion' id='lastname' ref={direction => this.inputDirection = direction} className='inputsize_Register'/>
              <button type='submit' className='buttonSubmit_Register'>
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
        <div className='contentimage_register'>
        </div>
      </div>
    );
  }
}

export default Register;
