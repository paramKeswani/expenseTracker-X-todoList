import React from 'react'
import Dashboard from "./Dashboard" 
import Add from './Add';
import Visualization from './Visualization';
import { useNavigate } from  "react-router-dom" ;
function Appbar(){

    const styles = {
      margin: "auto" ,
      width: "50%" ,
     
      padding: "10px",

    }
    const navigate = useNavigate();
    return <div  className="d-flex flex-column"  style={styles}>
    <div>
    <button onClick={()=>{
      // window.location  = '/'

      navigate('/');
    }}>Dashboard </button>
    <button style={{paddingLeft:25 , paddingRight : 25 }} onClick={()=>{
      // window.location  = '/dashboard'
      navigate('/add');
    } }>Add</button>
<button onClick={()=>{
      // window.location  = '/dashboard'
      navigate('/visualize');
    }}>Visualization</button>
    <button onClick={()=>{
      // window.location  = '/dashboard'
      navigate('/seeall');
    }}>All Transactions</button>
    </div>
    <div className='d-flex m-1 col-10 justify-content-center'>
    <button onClick={()=>{
      // window.location  = '/'

      navigate('/dashboard');
    }}>Dashboard  Todo</button>
    <button style={{paddingLeft:25 , paddingRight : 25 }} onClick={()=>{
      // window.location  = '/dashboard'
      navigate('/addtodo');
    } }>Add Todo</button>
</div>
    
    </div>


    
  }

export default Appbar
