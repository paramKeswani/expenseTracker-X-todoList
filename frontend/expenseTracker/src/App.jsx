import { useState } from 'react'

import Appbar from './components/Appbar';

import {BrowserRouter , Routes , useNavigate , Route} from  "react-router-dom" ;
import Dashboard from "./components/Dashboard" 
import Add from './components/Add';
import Visualization from './components/Visualization';
import LoginDetails from './components/LoginDetails';
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import SeeAll from "./components/SeeAll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DashboardTodo from '../ToDo/DashboardTodo';
import AddTodo from '../ToDo/AddTodo';
import CreateTodo from '../ToDo/CreateTodo';
import { verify } from '../ToDo/atom';
import FinalTodo from '../ToDo/FinalTodo';
import Admin from '../ToDo/Admin';

function App() {
  const [count, setCount] = useState(0) ;

  


  return (<>
<RecoilRoot>

  <LoginDetails username={"param"}></LoginDetails>
    <div style={{paddingLeft :"15%"}}>
          <BrowserRouter>
      <Appbar/>

  <div>

  </div>
<div className='expense Tracker'>
<Routes>


<Route path='/' element = {<Dashboard/>}></Route>
<Route path='/add' element = {<Add/>}></Route>
<Route path='/visualize' element = {<Visualization/>}></Route>
<Route path='/seeall' element = {<SeeAll />}></Route>

</Routes>

</div>
<div className='Todo list'>

<Routes>
<Route path='/dashboard' element = {<DashboardTodo/>}></Route>
<Route path='/addtodo' element = {<AddTodo/>}></Route>
<Route path= '/createtodo' element = {<CreateTodo />}></Route>
<Route path= '/finaltodo' element = {<FinalTodo />}></Route>
<Route path= '/alltodos' element = {<Admin />}></Route>
</Routes>
  
</div>


      </BrowserRouter>
          
    </div>
</RecoilRoot>
  </>
    

  )

  
  
  
}

export default App
