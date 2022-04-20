import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1SEy4T5tEY1aVlXIrXZfBrKbi2lUYabQ",
  authDomain: "crwn-clothing-db-8f6a8.firebaseapp.com",
  projectId: "crwn-clothing-db-8f6a8",
  storageBucket: "crwn-clothing-db-8f6a8.appspot.com",
  messagingSenderId: "1057420587249",
  appId: "1:1057420587249:web:b2c72a353474f0597e3950",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error:", error);
    }
  }

  return userDocRef
};
