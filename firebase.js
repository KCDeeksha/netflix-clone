/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDzG97oA1pTY--KcyCdIclKDKW2E5SrDd4",
    authDomain: "netflix-clone-5c6e3.firebaseapp.com",
    projectId: "netflix-clone-5c6e3",
    storageBucket: "netflix-clone-5c6e3.appspot.com",
    messagingSenderId: "347122130489",
    appId: "1:347122130489:web:35888822fcb657000d77e8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db =  getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp }

export default db;