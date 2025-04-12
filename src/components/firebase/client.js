
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe1I9-vB39NLMsu7Tsfa7uhnw7lEZyjtA",
  authDomain: "ecommerce-autos-f5ac2.firebaseapp.com",
  projectId: "ecommerce-autos-f5ac2",
  storageBucket: "ecommerce-autos-f5ac2.firebasestorage.app",
  messagingSenderId: "987751177366",
  appId: "1:987751177366:web:0395b036c3910ffd0276b7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


