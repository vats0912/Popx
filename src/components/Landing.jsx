'use client'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Landing() {
    const navigate=useNavigate();
  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
  <div className="bg-gray-200 shadow-2xl  p-10 w-80 h-[700px] flex flex-col justify-end text-center">
    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-left">Welcome to PopX</h1>
    <p className="text-gray-600 mb-6 text-left">
      Lorem ipsum dolor sit tyubntrd erbvcsdert 
     
    </p>
    <div className="flex flex-col space-y-3">
      <button onClick={()=>navigate('/signup')} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
        Create Account
      </button>
      <button onClick={()=>navigate('/login')} className="w-full border bg-purple-100 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
        Already Registered? Login
      </button>
    </div>
  </div>
</div>
  )
}

export default Landing