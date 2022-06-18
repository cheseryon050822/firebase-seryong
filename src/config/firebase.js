
import { async } from "@firebase/util";
import { getApps,initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, addDoc,collection,getDocs,query, doc, updateDoc, 
  deleteField,deleteDoc,setDoc,originalDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const createUser = (email,password) =>{
  const auth = getAuth();
  createUserWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{
  const user = userCredential.user;
  console.log(user)
  console.log("create user success!!")
  return "success"
})
.catch((error)=>{
  console.log(error.message)
  return "failed"
});
}

export const db =getFirestore();

export const createDataInFirebase = async () =>{
  let returnObj =""
  console.log('firebase start')
  try {
    const docRef =await addDoc(collection(db,"users"),{
      first:"AdaAda",
      last:"Lovelace",
      born:1815
    })
    returnObj="test1"
    console.log("Document written with ID:",docRef.id)
  }catch(e){
    returnObj="test2"
    console.error("Error adding document:",e)
  }
  return returnObj
}
export const readData =async ()=>{
console.log('readData')
const q = query(collection(db,"users"));
const  querySnapshot =await getDocs(q);
querySnapshot.forEach((doc)=>{
  console.log(doc.id,"=>",doc.data());
});
};
export const updateData =async ()=>{
  const washingtonref=doc(db,"users","0mq4nOvGLCNHCvwsHK58"); 
  await updateDoc(washingtonref,{
    capital:true
  })
}

export const deleteData =async ()=>{
  const cityRef = doc(db,"users","0mq4nOvGLCNHCvwsHK58");
  await deleteDoc(cityRef, {
      capital: deleteField()
  });
  }

export const newData =async(First,Last,Born)=>{
  const townRef = doc(db, 'cities');
  setDoc(townRef, { capital: true }, { merge: true });
  await setDoc(doc(db, "cities"), {
    First,
    Last,
    Born
  });
}
export const  originalData=async (First,Last,Born)=>{
  const newCountriesRef = doc(collection(db, "countries"));
  await setDoc(newCountriesRef, {
    First,
    Last,
    Born,
  });
  
   
  }
    