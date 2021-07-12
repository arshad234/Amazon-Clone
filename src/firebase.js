// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDJRTgVTYohA4CxCuNqXHFdzX5xM9g7Cyc",
    authDomain: "clone-50716.firebaseapp.com",
    projectId: "clone-50716",
    storageBucket: "clone-50716.appspot.com",
    messagingSenderId: "383233974662",
    appId: "1:383233974662:web:366449747a6be39e160c07",
    measurementId: "G-JT0DTCVHTH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};