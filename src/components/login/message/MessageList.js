import React from 'react';
import MesssageItem from './MessageItem';

const MessageList = ({ authUser, messages, onEditMessage, onRemoveMessage }) => (
  <ul>
    { messages.map(message => (
    <MessageItem
    authUser={ authUser }
    messages={ messages }
    onEditMessage={ onEditMessage }
    onRemoveMessage={ onRemoveMessage }/>
  ))}
  </ul>
);

export default MessageList;
