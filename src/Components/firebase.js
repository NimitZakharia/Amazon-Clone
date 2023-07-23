import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuLOesZwpG4cGKuZlVkdfMH6R6Z7CBbwU",
  authDomain: "clone-15a60.firebaseapp.com",
  projectId: "clone-15a60",
  storageBucket: "clone-15a60.appspot.com",
  messagingSenderId: "153575214",
  appId: "1:153575214:web:06bed401c0e58a246964bf",
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };
