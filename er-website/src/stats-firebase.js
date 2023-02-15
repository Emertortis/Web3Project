import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPeEGwDcsXhxC3h55K2NxghPeUSh3kcNM",
    authDomain: "web-3-73f3e.firebaseapp.com",
    projectId: "web-3-73f3e",
    storageBucket: "web-3-73f3e.appspot.com",
    messagingSenderId: "94315058879",
    appId: "1:94315058879:web:5657d22c9227681bbcd80a",
    measurementId: "G-YVKEF3CW8F"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db, firebase};

  async function AllStats() {
    try {
      const collectionRef = db.collection("stats");
    } catch (err) {
      console.log(err);
    }
  }

  AllStats();