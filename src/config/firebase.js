import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDLOMOmWUCcrB_Zi3Khy-nWoVVqFE5fPMo",
  authDomain: "tiktok---jornada-13878.firebaseapp.com",
  projectId: "tiktok---jornada-13878",
  storageBucket: "tiktok---jornada-13878.appspot.com",
  messagingSenderId: "811730222060",
  appId: "1:811730222060:web:0ab68843a19919531c9ec9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;