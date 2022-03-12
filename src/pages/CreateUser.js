import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import { TextField,Button } from "@material-ui/core";
import { createUser } from "../config/firebase";

const CreateUser=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const navigate = useNavigate()

const handleClick = async() =>{
    const result =await createUser(email,password)
    console.log("~file:CreateUser.js ~ line 13 ~ handleClick ~ result",result)
     if (result){
         navigate("/main")
     }else  {
         setError("User作成に失敗しました")
      }
}
 return(
<div>
    <h2>Createuser</h2>
    <div>
    <Link to="/login">login</Link>
    </div>
    <div>
    <Link to="/main">main</Link>
    </div>
    <div>
    <TextField id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}></TextField><br/>
    <TextField id="password" label="password" value={password} onChange={e=>setPassword(e.target.value)}></TextField><br/>
    <Button onClick={handleClick}>古木あーっと！</Button>
    </div>
</div>
 );   
}

export default CreateUser;