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
const firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;
