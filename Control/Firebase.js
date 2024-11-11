import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const settings = {timestampsInSnapshots: true,merge:true};
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
firebase.initializeApp(config);
firebase.firestore().settings(settings);
const storage=firebase.storage;

export default conexion = firebase.firestore()
const auth = firebase.auth() 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    firebase,
    auth,
   googleAuthProvider,
   storage,
}