import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPyixDkro2_eH2oSZgwQmMqpZM3-vCObQ",
  authDomain: "instaclone-81899.firebaseapp.com",
  databaseURL: "https://instaclone-81899.firebaseio.com",
  projectId: "instaclone-81899",
  storageBucket: "instaclone-81899.appspot.com",
  messagingSenderId: "914657216205",
  appId: "1:914657216205:web:7ab3fbf640e490f2d84b84",
  measurementId: "G-SX6TQVY3GL"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };