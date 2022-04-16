import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate,useLocation} from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { TextField,Button } from "@material-ui/core";

const Login=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const navigate = useNavigate()
const provider = new GoogleAuthProvider();
const Location = useLocation();
  
const handleClick=()=>{
const auth = getAuth();
auth.languageCode = 'it';
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    Location.push('/main');
    
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   const email = error.email;
    // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
 return(
<div>
    <h1>Hello</h1>  
    <div>
    <Link to="/createuser">createuser</Link>
    </div>
    <div>
    <Link to="/main">main</Link>
    </div>
    <div>
    <TextField id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}></TextField><br/>
    <TextField id="password" label="password" value={password} onChange={e=>setPassword(e.target.value)}></TextField><br/>
    <Button onClick={handleClick}>破竹の二連勝</Button>
    </div>
</div>
 );   
}

export default Login;