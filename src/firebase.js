import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcTtwJduFxHQQ7zgltLkh6WPZyw8kjT18",
    authDomain: "clone-847ce.firebaseapp.com",
    databaseURL: "https://clone-847ce.firebaseio.com",
    projectId: "clone-847ce",
    storageBucket: "clone-847ce.appspot.com",
    messagingSenderId: "23152254481",
    appId: "1:23152254481:web:1ec83bfe583496811f5bb0",
    measurementId: "G-4KE1CSKRSB"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};