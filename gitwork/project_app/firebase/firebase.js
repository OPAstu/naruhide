// Import the functions you need from the SDKs you need
const firebase = require("firebase");
/*
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
*/
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<sservice>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_TgPuYuSVu_p5RkouKZjPKc5tEb0unJo",
    authDomain: "opa-naruhide.firebaseapp.com",
    projectId: "opa-naruhide",
    storageBucket: "opa-naruhide.appspot.com",
    messagingSenderId: "798324862823",
    appId: "1:798324862823:web:1a05d4df8dcd838f1009c2",
    measurementId: "G-9V887PBRWR"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore.lite.getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}