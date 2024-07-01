
import { Button, Container, Dropdown, DropdownButton  } from 'react-bootstrap';
import React, { useState , useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { monthAtom , spendingAtom , incomeAtom } from './atom';
import { useRecoilState } from 'recoil';

function Input() {
  const [ spendinga , useSpendingA] = useRecoilState(spendingAtom);
  const [ incomea , useIncomeA] = useRecoilState(incomeAtom);

  const [selectedMonth , setSelectedMonth] = useRecoilState(monthAtom);
  const months  = ["Januray" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "Sepetember" , "October" ,"November" , "December"]
  useEffect(
     () =>{

      fetch("http://localhost:3001/user/calculate" , {

        method: "POST",
        body : JSON.stringify({
            username:  "param" ,

            month: selectedMonth.toString()
        }) ,
        headers :{
            "Content-Type" : 'application/json'
        }


    }).then(
        async function(response){
            const data = await response.json();
            console.log("hi shakya aagaya");

            console.log(data.expense);
            console.log("param feb ");
            console.log(selectedMonth);
            useSpendingA(data.expense);
            useIncomeA(data.income);

        }
    )

    }
  , [selectedMonth]);
  return (


<div>
<Container className='border ' >
<Container className=''>
<Container className=' d-flex '>
<div className='ml-4'><p style={{fontSize:17}}>Enter the month</p></div>
<div className='col-1 '></div>
<DropdownButton id="dropdown-basic-button col-12" onSelect={(eventKey)=>{setSelectedMonth(months.indexOf(eventKey)+1) ; console.log(selectedMonth)  }} title={months[selectedMonth-1]} >
      <Dropdown.Item eventKey = "January" >January</Dropdown.Item>
      <Dropdown.Item eventKey = "February" >February</Dropdown.Item>
      <Dropdown.Item eventKey = "March" >March</Dropdown.Item>
      <Dropdown.Item eventKey = "April" >April</Dropdown.Item>
      <Dropdown.Item eventKey = "May" >May</Dropdown.Item>
      <Dropdown.Item eventKey = "June" >June</Dropdown.Item>
      <Dropdown.Item eventKey = "July" >July</Dropdown.Item>
      <Dropdown.Item eventKey = "August" >August</Dropdown.Item>
      <Dropdown.Item eventKey = "September" >September</Dropdown.Item>
      <Dropdown.Item eventKey = "October" >October</Dropdown.Item>
      <Dropdown.Item eventKey = "November" >November</Dropdown.Item>
      <Dropdown.Item eventKey = "December" >December</Dropdown.Item>
    </DropdownButton>
</Container>

           
   

   {/* <Button><AiOutlineSearch></AiOutlineSearch></Button> */}
  
   

     
   </Container>
</Container>

</div>

  )
}

export default Input

