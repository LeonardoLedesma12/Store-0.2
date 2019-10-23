import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC5_FaDom2fpSPIYl1WsPoOHnlkcWM9bT0',
  authDomain: 'tienda-d9433.firebaseapp.com',
  databaseURL: 'https://tienda-d9433.firebaseio.com',
  projectId: 'tienda-d9433',
  storageBucket: '',
  messagingSenderId: '1084419877441',
  appId: '1:1084419877441:web:ec2893379a14279f0634c0',
  measurementId: 'G-T3TMN17KJD',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.database();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.doCreateUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.SignInWithEmailAndPassword(email, password);

  doSignInGoogle = () =>
    this.auth.SignInWithPopup(this.googleProvider);

  doSignInFacebook = () =>
    this.auth.SignInWithPopup(this.facebookProvider);

  doSignInTwitter = () =>
    this.auth.SignInWithPopup(this.twittwerProvider);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid).once('value').then(snapshot => {
          const dbUser = snapshot.val();
          if (!dbUser.roles) {
            dbUser.roles = {};
          }

          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
            providerData: authUser.providerData,
            ...dbUser, };
          next(authUser);
        });
      } else {
        fallback();
      }
    });
  user = uid =>
  this.db.ref('users/${uid}');
  users = () => this.db.ref('users');
  message = uid => this.db.ref('messages/${uid}');
  messages = () => this.db.ref('messages');
}

export default Firebase;
