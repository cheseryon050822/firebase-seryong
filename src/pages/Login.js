import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';

const Login=()=>{

 return(
<div>
    <h1>hello</h1>
    <Link to="/createuser">createuser</Link>
    <Link to="/main">main</Link>
</div>
 );   
}

export default Login;