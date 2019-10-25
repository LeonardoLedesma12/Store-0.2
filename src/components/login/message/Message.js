import React, { Component } from 'react';
import { AuthUserContext } from '../session';
import { withFirebase } from '../../../src';
import MessageList from './MessageList';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: false,
      messages: [],
      limit: 5,
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({
      loading: true,
    });
    this.props.firebase.messages().orderByChild('createdAt').limitToLast(this.state.limit).on('value', snapshot => {
      const messageObject = snapshot.val();
      if (messageObject) {
        const messageList = object.keys(messageObject).map(key => ({
          ...messageObject[key],
          uid: key,
        }));
        this.setState({
          messages: messageList,
          loading: false,
        });
      }else {
        this.setState({
          messages: null,
          loading: false,
        });
      }
    });
  };

  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onChangeText = event => {
    this.setState({
      text: event.target.value,
    });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({
      text: this.state.text,
      userId: authUser.uid,
      createdAt: this.props.firebase.serverValue.TIMESTAMP,
    });
    this.setState({
      text: '',
    });
    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;
    this.props.firebase.message(message.uid).set({
      ...messageSnapshot,
      text,
      editedAt: this.props.firebase.serverValue.TIMESTAMP,
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).remove();
  };

  onNextPage = () => {
    this.setState(state => ({
      limit: state.limit + 5,
    }),
    this.onListenForMessages,
    );
  };

  render() {
    const { text, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            { !loading && messages && (
              <button type='button' onClick={this.onNextPage}>
                Más
              </button>
            )}
            { loading && <div>loading...</div> }
            { messages && (<MessageListauthUser
            authUser={ authUser }
            messages={ messages }
            onEditMessage={ this.onEditMessage }
            onRemoveMessage={ this.onRemoveMessage }/>)}
            { !messages && <div>aquí no hay mensajes</div>}
            <form onSubmit={event =>
            this.onCreateMessage(event, authUser)
            }>
              <input type='text' value={ text } onChange={ this.onChangeText }/>
              <button type='submit'>
                Enviar
              </button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Message);
