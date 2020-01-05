import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB29qC-NSMWw3fOPaQMR3hW5k1lDBwq0IU",
    authDomain: "whatsapp-707dd.firebaseapp.com",
    databaseURL: "https://whatsapp-707dd.firebaseio.com",
    projectId: "whatsapp-707dd",
    storageBucket: "whatsapp-707dd.appspot.com",
    messagingSenderId: "97138463993",
    appId: "1:97138463993:web:40fb1c30d50561c073be28",
    measurementId: "G-7CETW5KJ9J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase
