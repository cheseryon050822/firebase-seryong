import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { TextField,Button } from "@material-ui/core";

const Login=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const navigate = useNavigate()

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });

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
    <Button onClick={auth}>古木あーっと！</Button>
    </div>
</div>
 );   
}

export default Login;