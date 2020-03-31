import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB29qC-NSMWw3fOPaQMR3hW5k1lDBwq0IU",
    authDomain: "fake-whatsapp.firebaseapp.com/",
    databaseURL: "https://whatsapp-707dd.firebaseio.com",
    projectId: "whatsapp-707dd",
    storageBucket: "whatsapp-707dd.appspot.com",
    messagingSenderId: "97138463993",
    appId: "1:97138463993:web:32923b60208e9c5073be28",
    measurementId: "G-TEQP4VKS9M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        try {
            await userRef.set({
                email,
                displayName,
                messages: [],
                friends: [],
                ...additionalData,
            })
        } catch (error) {
            console.log(`SOME ERROR :- ${error.message}`);
        }
    }
    return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
