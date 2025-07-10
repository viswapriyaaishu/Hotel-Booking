import {BrowserRoutes,Routes,Route, BrowserRouter, useNavigate, Navigate} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/login";
import { List } from "./pages/List/List";
import { ListItem } from "./pages/ListItem/ListItem";
import { New } from "./pages/new/New";
import { Useritems } from "./components/Form/userForm";
import { hotelitems } from "./components/Form/hotelForm";
import './components/darkmode/Darkmode.scss'
import { useContext } from "react";
import { darkContext } from "./components/context/StyleContext";
import { UserContext } from "./components/context/Usercontext";
import { NewHotel } from "./pages/new/NewHotel";
import { NewRoom } from "./pages/new/NewRoom";

function App() {
  const {darkmode,dispatch}=useContext(darkContext)
  const {user}=useContext(UserContext)

  const Handlesecurity=({children})=>{
   return  user?children:<Navigate to='/login'></Navigate>
  }
  return (
    <div className={`${darkmode?"app dark":"app"}`}>
      <BrowserRouter>
  <Routes>
    <Route path='/'>
    <Route index element={<Handlesecurity><Home></Home></Handlesecurity>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='users'>
      <Route index element={<Handlesecurity><List form={Useritems} categoryType="users"></List></Handlesecurity>}></Route>
      <Route path=':pid' element={<Handlesecurity><ListItem  ></ListItem></Handlesecurity>}></Route>
      <Route path='new' element={<Handlesecurity><New data={Useritems} title="Add new User" categoryType="users"></New></Handlesecurity>}></Route>
    </Route>

    <Route path='hotels'>
      <Route index  element={<Handlesecurity><List categoryType="hotels"></List></Handlesecurity>}></Route>
      <Route path=':pid' element={<Handlesecurity><ListItem ></ListItem ></Handlesecurity>}></Route>
      <Route path='new' element={<Handlesecurity><NewHotel></NewHotel></Handlesecurity>}></Route>
    </Route>

    <Route path='rooms'>
      <Route index element={<Handlesecurity><List categoryType="rooms"></List></Handlesecurity>}></Route>
      <Route path=':pid' element={<Handlesecurity></Handlesecurity>}></Route>
      <Route path='new' element={<Handlesecurity><NewRoom></NewRoom></Handlesecurity>}></Route>
    </Route>
    </Route>
  </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
