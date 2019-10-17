import React, { Component } from 'react';
import './List.css';
import firebaseConf from '../../Firebase';
import AddProducts from './AddProducts';

class List extends Component{
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentWillMount () {
    firebaseConf.database().ref('List').on('child_added', snapshot => {
      this.setState({
        list: this.state.list.concat(snapshot.val()),
      });
    });
  }

  render() {
    return (
      <div className='container_list'>
        <div className='content_list'>
          <div className='contentProduct_list'>
            <h2 className='txtProduct_list'>Nombre P</h2>
          </div>
          <div className='contentProduct_list'>
            <h2 className='txtProduct_list'>Tipo</h2>
          </div>
          <div className='contentProduct_list'>
            <h2 className='txtProduct_list'>Descripcion</h2>
          </div>
          <div className='contentProduct_list'>
            <h2 className='txtProduct_list'>Precio</h2>
          </div>
        </div>
        {
          this.state.list.map(list => (
            <div className='content_list'>
              <div className='contentProduct_list'>
                <h2 className='txtProduct_list'>{list.name}</h2>
              </div>
              <div className='contentProduct_list'>
                <h2 className='txtProduct_list'>{list.desc}</h2>
              </div>
              <div className='contentProduct_list'>
                <h2 className='txtProduct_list'>{list.type}</h2>
              </div>
              <div className='contentProduct_list'>
                <h2 className='txtProduct_list'>{list.price}</h2>
              </div>
            </div>
          ))
        }
        <AddProducts addProduct = {this.addProduct}/>
      </div>
    );
  }
}

export default List;
