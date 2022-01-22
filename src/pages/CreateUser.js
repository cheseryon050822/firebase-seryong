import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';

const CreateUser=()=>{

 return(
<div>
    <h1>createuser</h1>
    <Link to="/login">login</Link>
    <Link to="/main">main</Link>
</div>
 );   
}

export default CreateUser;