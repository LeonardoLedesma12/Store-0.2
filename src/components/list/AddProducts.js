import React, { Component } from 'react';
import './AddProduct.css';
import firebaseConf from '../../Firebase';

class AddProducts extends Component {
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
    this.refs.listForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('List').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, desc, type, price } = snapshot.val();
      const data = { name, desc, type, price };
      this.setState({ form: [data].concat(this.state.form) });
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      desc: this.inputDesc.value,
      type: this.inputType.value,
      price: this.inputPrice.value,
    };
    if (params.name && params.desc && params.type && params.price) {
      firebaseConf.database().ref('List').push(params).then(() => {
        this.showAlert('success', 'Un nuevo producto ha sido agregado!');
      }).catch(()=> {
        this.showAlert('danger', 'No se ha podidio agregar,intentelo más tarde');
      });
      this.resetForm();
    }else {
      this.showAlert('warning', 'rellena todos los campos e intentalo de de nuevo');
    }
  }

  render() {
    return (
      <div>
        <form className='directionform_product' ref='listForm' onSubmit={this.sendMessage.bind(this)}>
          <div className='productsizedatalist'>
            <input type='text' id='name' ref={name=> this.inputName = name}/>
            <label>Nombre</label>
          </div>
          <div className='productsizedatalist'>
            <input type='text' id='desc' ref={desc=> this.inputDesc = desc}/>
            <label>Desc</label>
          </div>
          <div className='productsizedatalist'>
            <input type='text' id='type' ref={type=> this.inputType = type}/>
            <label>T. p</label>
          </div>
          <div className='productsizedatalist'>
            <input type='numbers' id='price' ref={price=> this.inputPrice = price}/>
            <label>Precio</label>
          </div>
          <button className='productsizedatalist' type='submit'>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default AddProducts;
