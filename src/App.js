import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';


const App=()=>{
    return (
      <div>
      <Link to="/login">login</Link>
      </div>
    );
}
  
  
  export default App;