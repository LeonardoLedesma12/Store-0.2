import React from 'react';

const FirebaseContext = React.createContext(null);
export const withFirebase = component => props => (
  <FirebaseContext.consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
  </FirebaseContext.consumer>
);

export default FirebaseContext;
