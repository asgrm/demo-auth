// import firebase from "firebase/app"
// import "firebase/auth"

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBuBkRUZl3NOZzRCPbj_7kqGwqK3sbUgCI",
//   authDomain: "fir-auth-dev-d515f.firebaseapp.com",
//   projectId: "fir-auth-dev-d515f",
//   storageBucket: "fir-auth-dev-d515f.appspot.com",
//   messagingSenderId: "344147416514",
//   appId: "1:344147416514:web:7cd236da81050f147b725b"
// })


// export const auth = app.auth()
// export default app

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuBkRUZl3NOZzRCPbj_7kqGwqK3sbUgCI",
  authDomain: "fir-auth-dev-d515f.firebaseapp.com",
  projectId: "fir-auth-dev-d515f",
  storageBucket: "fir-auth-dev-d515f.appspot.com",
  messagingSenderId: "344147416514",
  appId: "1:344147416514:web:7cd236da81050f147b725b"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;