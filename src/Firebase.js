import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAJZLQZFBxe_KxjEji-mf2OxS2mJ-RBRIQ",
    authDomain: "todo-f488a.firebaseapp.com",
    databaseURL: "https://todo-f488a.firebaseio.com",
    projectId: "todo-f488a",
    storageBucket: "todo-f488a.appspot.com",
    messagingSenderId: "270099996391",
    appId: "1:270099996391:web:b60fc8a5f2c51e38d98c42",
    measurementId: "G-HZY2565MZD"
  };

  firebase.initializeApp(config);
  const firestore = new firebase.firestore()

  export { firestore }