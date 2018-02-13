import * as firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxfvIK9fTKP9Y0hQPz7k3UVT0g6NN_9H8",
    authDomain: "memoshiba-1fa34.firebaseapp.com",
    databaseURL: "https://memoshiba-1fa34.firebaseio.com",
    projectId: "memoshiba-1fa34",
    storageBucket: "",
    messagingSenderId: "642072002933"
})


export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export default firebase;
