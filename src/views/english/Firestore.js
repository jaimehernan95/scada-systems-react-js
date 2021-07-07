import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyBiyfgZYcyxT-VnOv5G-V7FFGPWy_36CYo",
  authDomain: "apr-control-srl-pe.firebaseapp.com",
  databaseURL: "https://apr-control-srl-pe.firebaseio.com",
  projectId: "apr-control-srl-pe",
  storageBucket: "apr-control-srl-pe.appspot.com",
  messagingSenderId: "840495920855",
  appId: "1:840495920855:web:408380a83a4877445ea292",
  measurementId: "G-WP1VNWDE8Z"
  
  };
  firebase.initializeApp(firebaseConfig);
  
  // const db = firebase.firestore()
  
  export default firebase;