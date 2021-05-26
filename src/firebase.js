// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAThUSCSL0qKh52TnSCGm_zacOipr9ikZU",
    authDomain: "facebook-clone-106dd.firebaseapp.com",
    projectId: "facebook-clone-106dd",
    storageBucket: "facebook-clone-106dd.appspot.com",
    messagingSenderId: "16500169873",
    appId: "1:16500169873:web:852d64e9fdd58c39067330",
    measurementId: "G-4WXJYBGEEG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
