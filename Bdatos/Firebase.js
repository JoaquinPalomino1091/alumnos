import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const config = {
  apiKey: "AIzaSyCuVbETFxDaprBIbga76RnJYuTcBoWrMw8",
  authDomain: "alumnos-prueba-841ae.firebaseapp.com",
  databaseURL: "https://alumnos-prueba-841ae-default-rtdb.firebaseio.com",
  projectId: "alumnos-prueba-841ae",
  storageBucket: "alumnos-prueba-841ae.appspot.com",
  messagingSenderId: "737205349718",
  appId: "1:737205349718:web:dbfede0c0a6288d02b7af7",
  measurementId: "G-FWVFPHK7XM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);  // Usa "config" en lugar de "FirebaseConfig"
}

export default firebase;