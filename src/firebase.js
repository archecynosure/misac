import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRchfeMUrg53CRALzaYklpLIi0kDFNMoI",
    authDomain: "misac-29a13.firebaseapp.com",
    projectId: "misac-29a13",
    storageBucket: "misac-29a13.appspot.com",
    messagingSenderId: "440671948230",
    appId: "1:440671948230:web:063dbb44c06c2a8417b6c7",
    measurementId: "G-LM01BS8R1D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };