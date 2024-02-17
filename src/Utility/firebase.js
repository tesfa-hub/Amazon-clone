
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAoSl57TUH1S59BNrv02zicnOwq9BsRoV4",
  authDomain: "amaon-clone-10d38.firebaseapp.com",
  projectId: "amaon-clone-10d38",
  storageBucket: "amaon-clone-10d38.appspot.com",
  messagingSenderId: "483801800553",
  appId: "1:483801800553:web:4f470add4f838feb64a7f8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
 export  const  auth = getAuth(app);
   export const  db = app.firestore();
  