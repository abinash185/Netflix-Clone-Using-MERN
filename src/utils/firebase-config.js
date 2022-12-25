import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcVPLW4Dua_5Nsd3zADaT2m44cs-4hNtY",
  authDomain: "react-netflix-clone-9a48a.firebaseapp.com",
  projectId: "react-netflix-clone-9a48a",
  storageBucket: "react-netflix-clone-9a48a.appspot.com",
  messagingSenderId: "1047259418259",
  appId: "1:1047259418259:web:fc5821f58fbaefe22a4766",
  measurementId: "G-002JXBQ1FS"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
