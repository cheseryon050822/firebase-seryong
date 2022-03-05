import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useHistory} from 'react-router-dom';
import { TextField,Button } from "@material-ui/core";

const CreateUser=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
// const history=useHistory();

const handleClick = async () =>{
    const result =await CreateUser(email,password)
    // console.log("~file:CreateUser.js ~ line 13 ~ handleClick ~ result",result)
    // if (result){
    //     history.push('/main')
    // }else{
    //     setError("User作成に失敗しました")
    // }
}
 return(
<div>
    <h1>createuser</h1>
    <div>
    <Link to="/login">login</Link>
    </div>
    <div>
    <Link to="/main">main</Link>
    </div>
    <TextField id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}></TextField><br/>
    <TextField id="password" label="password" value={password} onChange={e=>setPassword(e.target.value)}></TextField><br/>
    <Button onClick={handleClick}></Button>
</div>
 );   
}

export default CreateUser;