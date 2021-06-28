import firebaseClient from "firebase/app";
import "firebase/firestore"

const CLIENT_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
}

export const db = firebaseClient.firestore();