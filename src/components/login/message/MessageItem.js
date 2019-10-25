import React, { Component } from 'react';

class MessageItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditText = () => {
    this.setstate(state => ({
      editMode: !state.editMode,
      editText: this.props.messages.text,
    }));
  };

  onChangeEditText = event => {
    this.setState({
      editText:  event.target.value,
    });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this. state.edtitText);
    this.setState({
      editMode: false,
    });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;
    return (
      <li>
        {editMode ? (
          <input type= 'text' value={ editText } onChange={this.onChangeEditText}/>
        ) : (<span>
              <strong>{ message.userId }</strong>
              { message.text }
              { message.editedAt && <span>Editado</span>}
            </span>
          )}
        { authUser.uid === message.userId && (
          <span>
            {editMode ? (
              <span>
                <button onClick={ this.onSaveEditText }>
                  Guardar
                </button>
                <button onClick={ this.onToggleEditText }>
                  reset
                </button>
              </span>
            ) : (
              <button onClick={ this.onToggleEditText }>
                editar
              </button>
            )}
          { !editMode && (
            <button type='button' onClick={()=> onRemoveMessage(message.uid)}>
              Borrar
            </button>
          )}
          </span>
        )}
      </li>
    );
  }
}

export default MessageItem;
