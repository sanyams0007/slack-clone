import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDyiat8yp0EwN7qYHhJvKKIcINkgh_aNE",
  authDomain: "slack-clone-e715b.firebaseapp.com",
  projectId: "slack-clone-e715b",
  storageBucket: "slack-clone-e715b.appspot.com",
  messagingSenderId: "274078779798",
  appId: "1:274078779798:web:d2f1d7588745d94a7df5b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
