// Import the functions you need from the SDKs you need
import { getApps,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const createuser = (email,password) =>{
  const auth=getAuth();
  auth.createUserWithEmailAndPassword(auth,email,password)
.then((userCredentail)=>{
  const user = userCredentail.user;
  console.log(user)
  console.log("create user success!!")
  return "success"
})
.catch((error)=>{
  console.log(error.message)
  return "failed"
});
}