import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC2e_ab5mtVrrIlVE7QSZxHyp-akrJH-SU",
  authDomain: "crown-db-a5cca.firebaseapp.com",
  databaseURL: "https://crown-db-a5cca.firebaseio.com",
  projectId: "crown-db-a5cca",
  storageBucket: "crown-db-a5cca.appspot.com",
  messagingSenderId: "653237838720",
  appId: "1:653237838720:web:67d1a0a44b97b2c9cc5765",
  measurementId: "G-8ZVKBBXMPV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("errorr creatinng user", error.message);
    }
  }
  return userRef;
};

export default firebase;
