import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from './../Layouts/Header';
function DeveloperLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError]= useState('')
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async(e)=>{

    e.preventDefault();

    const data = {
      email: email,
      password:password
    };
 
    try {
       const response = await fetch("http://localhost:5000/api/v1/auth/login",{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
       });
       const result = await response.json();
      if(result.status)
        {
          toast.success(result.message);
          localStorage.setItem('token', result.token);
          
          const decodedToken = jwtDecode(result.token);
          console.log('Decoded Token:', decodedToken);

          navigate('/dashboard'); // Redirect to dashboard


        }
        else
        {
          toast.error(result.message); 
        }
        

    } catch (error) {
      toast.error(error);      
    }

  }
  return (
    
    <div className="flex justify-center bg-gray-200 items-center h-screen">
      <Header/>
    <form  className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleLogin}>
      <h2 className="text-2xl mb-6 text-center"> DEV|Login</h2>
     
      <div className="mb-4">
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
         
          className="w-full p-3 border rounded"
        />
      </div>
      <div className="mb-4">
        <input 
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>
      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="bg-blue-500 w-full text-white py-2 rounded">Login</button>
    </form>
    <Toaster position="top-right" />

  </div>
  )
}

export default DeveloperLogin
