import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCksl40QeLgCJW5Fi1en7sL5Qqt8evRnjE",
  authDomain: "space-bound-bdb68.firebaseapp.com",
  projectId: "space-bound-bdb68",
  storageBucket: "space-bound-bdb68.appspot.com",
  messagingSenderId: "958159712783",
  appId: "1:958159712783:web:65c56c9bba124f3134a97a"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const db = getFirestore(app);



