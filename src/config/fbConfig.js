import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAyRtzSQH9PRRxB2u0IimBokwYmsA_yG7o",
    authDomain: "mario-store.firebaseapp.com",
    databaseURL: "https://mario-store.firebaseio.com",
    projectId: "mario-store",
    storageBucket: "mario-store.appspot.com",
    messagingSenderId: "1061202798766"
};
firebase.initializeApp(config);

export default firebase;