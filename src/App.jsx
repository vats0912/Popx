
import { Toaster } from "react-hot-toast";
import './App.css'
import Landing from './components/Landing'

function App() {
  
  return (
    <>
     <Landing/> 
    <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
