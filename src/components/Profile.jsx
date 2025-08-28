import React from 'react'

function Profile() {
  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
  <div className="bg-gray-300 shadow-2xl p-6 w-[300px] h-[800px] flex flex-col justify-start">
    <div className=''>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 py-3 border-b-1 ">
      Account Settings
    </h3>
    </div>
   
    <div className="flex items-center space-x-4 mb-6 mt-10 ">
      <img
        src="/profile image.webp"
        alt="Profile"
        className="w-20 h-20 rounded-full border border-gray-300 cursor-pointer"
      />
      <div className="text-left">
        <h2 className="text-lg font-bold text-black">Elen carter</h2>
        <p className="text-sm text-black">elencarter09@example.com</p>
      </div>
    </div>

    
    <p className="text-gray-600 text-sm mb-6 border-b-2 border-dashed py-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Sit, consequatur! Eligendi quia rem obcaecati ipsum similique? 
      Cupiditate nihil debitis deserunt.
    </p>

  </div>
</div>
  )
}

export default Profile