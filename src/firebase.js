// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChV-3CubFpvV1X16CkLSbHPBU7T34zGE4",
    authDomain: "pozitif-77e2d.firebaseapp.com",
    projectId: "pozitif-77e2d",
    storageBucket: "pozitif-77e2d.appspot.com",
    messagingSenderId: "399849643761",
    appId: "1:399849643761:web:72a5485c26e637f2df9350",
    measurementId: "G-C42LHE9YZF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;