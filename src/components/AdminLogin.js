import React from 'react'

function AdminLogin() {
  return (
    <div className="flex justify-center items-center h-screen">
    <form  className="bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl mb-6 text-center">Login| ADMIN</h2>
     
      <div className="mb-4">
        <input 
          type="email"
          placeholder="Email"
          
         
          className="w-full p-3 border rounded"
        />
      </div>
      <div className="mb-4">
        <input 
          type="password"
          placeholder="Password"
          
          className="w-full p-3 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 w-full text-white py-2 rounded">Login</button>
    </form>
  </div>
  )
}

export default AdminLogin
