import {React, useState} from "react";
import {Form} from 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';
import { TextField } from "@material-ui/core";

const Main=()=>{
 const[email,setEmail]=useState('')
 const[pasword,setPasword]=useState('')


 return(
<div>
<h1>logout</h1>
<h3>Email</h3>
<TextField id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}></TextField><br/>
<h3>Pasword</h3>
<TextField id="pasword" label="pasword" value={pasword} onChange={e=>setPasword(e.target.value)}></TextField><br/>

    <div>    
      <Link to="/login">login</Link>
    </div>
</div>
 );   
}

export default Main;