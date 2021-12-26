import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAThPGhZZ63XL1VvMdrJZehGlRTJMAFF4Q",
  authDomain: "uber-clone-next-ade59.firebaseapp.com",
  projectId: "uber-clone-next-ade59",
  storageBucket: "uber-clone-next-ade59.appspot.com",
  messagingSenderId: "651067957467",
  appId: "1:651067957467:web:b84c5f36a1645b35fb2cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export { app, provider, auth }