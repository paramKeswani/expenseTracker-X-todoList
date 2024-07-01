import React from 'react';
import Container from 'react-bootstrap/Container';
import Input from './dashboard/Input';
import Spending from './dashboard/Spending';
import Income from './dashboard/Income';
import Balance from './dashboard/Balance';
import RecentTransac from './dashboard/RecentTransac';
import FiveCards from './dashboard/FiveCards';
import Cards from './dashboard/Cards';
import { Card } from 'react-bootstrap';

function Dashboard() {

  let dailyPoint = false ;
  return (
    <div className=''>
      <Container className="d-flex col-6 " >
      <Input />
        
      </Container>
      <div className='pt-2'></div>

      <div className='center d-flex flex-row justify-center'>
      <div className='d-flex flex-row justify-end  w-50  '>
      <div className='col-3'></div>
      
      <div>

        <Cards color={"danger"} className="bg-red-500"><Spending></Spending></Cards>
      </div>
      <div className='col-1'></div>
        <div>
          
        <Cards color={"success"} className="bg-green-500"><Income></Income></Cards>
        </div>
      </div>
      </div>


      <Container className=' float-left '>
      <Container className=" p-1 float-left " style={{}}>
     
      <Balance />
      <RecentTransac />

    </Container>
      </Container>
      <Container className=''>
      <div>
      <FiveCards className="" />

      </div>
     

      

      </Container>
      

    </div>
  );
}

export default Dashboard;
