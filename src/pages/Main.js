import {React, useState} from "react";
import {Form} from 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from 'react-router-dom';
import {TextField } from "@material-ui/core";
import { createDataInFirebase, readData,updateData,deleteData,newData} from "../config/firebase";
import Button  from "@material-ui/core/Button";
const Main=()=>{
 const[email,setEmail]=useState('')
 const[pasword,setPasword]=useState('')
 const createFunc =async ()=>{
   console.log('start')
   const res =await createDataInFirebase()
   console.log('fin',res)
 }
 const read =async ()=>{
   console.log("read")
   await readData()
 }
 const handleUpdate =async ()=>{
   await updateData();
 }
 const barusu =async()=>{
   await deleteData();
 };
 const newcreate =async()=>{
   await newData();
 }
 return(
 <div>
 <h1>Main画面</h1>
 <h3>Email</h3>
 <TextField id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}></TextField><br/>
 <h3>Pasword</h3>
 <TextField id="pasword" label="pasword" value={pasword} onChange={e=>setPasword(e.target.value)}></TextField><br/>

    <div>    
      <Button onClick={createFunc}>DBへ保存</Button><Button onClick={read}>DBを読み取り</Button>
      <Button variant="outlined" onClick={handleUpdate}>update</Button>
      <Button variant="outlined" onClick={barusu}>バルス！</Button>
      <Button variant="outlined" onClick={newcreate}>MY DATA CREATE</Button>
      <Link to="/login">login</Link>
    </div>
</div>
 );   
}

export default Main;