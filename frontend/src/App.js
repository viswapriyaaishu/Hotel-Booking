import logo from './logo.svg';
import { Navbar } from './components/Navbar/navbar.jsx';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import { Home } from './pages/Home/Home.js';
import { Hotels } from './pages/Hotels/Hotels.js';
import { Hotel } from './pages/Hotel/Hotel.js';
import { Login } from './components/login/login.js';
import { UserContext } from './context/UserContext.js';
import { useContext } from 'react';
function App() {
  const {user,loading,error,dispatch1}=useContext(UserContext)

  const ProtectedRoute=({children})=>{
    return user?children:<Navigate to='/login'></Navigate>
  }
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
    <Route path="/hotels" element={<ProtectedRoute><Hotels></Hotels></ProtectedRoute>}/>
    <Route path='/hotel/:id' element={<ProtectedRoute><Hotel></Hotel></ProtectedRoute>}/>
    <Route path='/login' element={<Login></Login>}/>
   </Routes>
   </BrowserRouter>
  );
}


export default App;
