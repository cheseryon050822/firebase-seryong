import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';

const Login=()=>{

 return(
<div>
    <h1>Hello</h1>  
    <div>
    <Link to="/createuser">createuser</Link>
    </div>
    <div>
    <Link to="/main">main</Link>
    </div>
</div>
 );   
}

export default Login;