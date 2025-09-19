import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './component/login.tsx'  
import Admindashboard from './component/admin_dashboard.tsx'
import Customerdashboard from './component/customer_dashboard.tsx'
import Home from './component/home.tsx'
import Signup from './component/signup.tsx'

function App() {
  return (
      <div>
        <h1> E-Commerce Application</h1>
      
        <Routes > 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin_dashboard" element={<Admindashboard />} />
          <Route path="/customer_dashboard" element={<Customerdashboard />} />
        </Routes>  
      </div>       
  )
}
export default App