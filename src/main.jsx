import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Landing from './components/Landing.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Profile from './components/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
