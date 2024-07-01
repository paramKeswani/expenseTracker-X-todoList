
import React, { useEffect, useState } from 'react'
import { Container, Dropdown } from 'react-bootstrap';
import { radioAtom , } from './atom';
import { useRecoilState , useRecoilValue } from 'recoil';



import { monthAtom } from '../dashboard/atom';

function Form() {

    const [count, setCount] = useRecoilState(radioAtom);

    const m = useRecoilValue(monthAtom);

    let req  = 0 ;





    const months = ["January" ,"February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    const date = new Date();
    const d = date.getDate();
    const month = m;
    const year = date.getFullYear();
    const hour = date.getHours() ;
    const minutes = date.getMinutes() ;
    const [ra , setRa] = useRecoilState(radioAtom);
const [category , setCategory] = useState("category");
const [inputt , setInputt] = useState("nul");
const [textA , setTextA] = useState("");
useEffect(()=>{console.log(category)},[category])
useEffect(()=>{console.log(inputt)},[inputt])
useEffect(()=>{console.log(textA)},[textA])

  return (
    <div>
    <div className='d-flex '>
    <div className='col-1 '></div>
        <div className='col-3  p-3 mx-2'>Date {d} {months[month]} {year}</div>
        <div className='col-1 '></div>
        <div className='col-3  p-3'>Time {hour} : {minutes}</div>
    </div>
    <div className='d-flex flex-start  '>
    <Container className=' d-flex justify-content-center  col-5 my-2  ps-5'>
        <label> Amount 

        </label>
        <div className='col-1'></div>
            <input  type='number' onChange={(e) =>{ setInputt(e.target.value) ;}}  />
        </Container>

        <Container className='d-flex m-2 '>
        <label >category</label>
        <div className='col-1'></div>
        <Dropdown  onSelect={(eventKey)=>{
            setCategory(eventKey) ;  }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {category}
      </Dropdown.Toggle>
{ra > 1 ?(<Dropdown.Menu>
        <Dropdown.Item eventKey="Salary">Salary</Dropdown.Item>
        <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
      </Dropdown.Menu>) : 
      (<Dropdown.Menu>
        <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
        <Dropdown.Item eventKey="shopping">shopping</Dropdown.Item>
        <Dropdown.Item eventKey="travelling">travelling</Dropdown.Item>
        <Dropdown.Item eventKey="Personal care">Personal care</Dropdown.Item>
        <Dropdown.Item eventKey="Medical">Medical</Dropdown.Item>
        <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
      </Dropdown.Menu>
    )}
      
    </Dropdown>
        
        </Container>

    </div>

<div className='d-flex justify-content-center mx-4'>
<div className=' col-10 '>
    <label for="comment">Comment:</label>
    <div className='col-6 my-3'>
    <textarea  onChange={(e)=>{setTextA(e.target.value)}} className="form-control " rows="5" id="comment"></textarea>

    </div>
    </div>
</div>

<Container className='d-flex justify-content-center '>
<button className='btn btn-success me-5' onClick={async()=>{

    if(count == "1"){
        req = -1*inputt ;

    }

    else {
        req = inputt ;
    }

    
            fetch("http://localhost:3001/user/add" , {

method: "POST",
body : JSON.stringify({
    val : count ,
    username : "param",
    month : month ,
    date : d , 
    year : year ,
    category : category ,


    amount:  req ,
    description :textA
}) ,
headers :{
    "Content-Type" : 'application/json'
}


}).then(
async function(response){
    const data = await response.json();
    alert("data inserted");

}
)
}}>Submit</button>

</Container>


    
        
      
    </div>
  )
}

export default Form
