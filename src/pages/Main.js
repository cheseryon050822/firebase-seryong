import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';

const Main=()=>{

 return(
<div>
    <h1>logout</h1>
    <div>
      <Link to="/login">login</Link>
    </div>
</div>
 );   
}

export default Main;