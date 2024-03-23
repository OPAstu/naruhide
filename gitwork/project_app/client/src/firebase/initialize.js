import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC_TgPuYuSVu_p5RkouKZjPKc5tEb0unJo",
  authDomain: "opa-naruhide.firebaseapp.com",
  projectId: "opa-naruhide",
  storageBucket: "opa-naruhide.appspot.com",
  databaseURL: "https://opa-naruhide-default-rtdb.firebaseio.com/",
  messagingSenderId: "798324862823",
  appId: "1:798324862823:web:1a05d4df8dcd838f1009c2",
  measurementId: "G-9V887PBRWR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
const db = getFirestore(app);
// export const peersRef = database.ref('peers');

/*
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
};
*/