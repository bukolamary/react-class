import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false)
  const[errormessage, setErrormesage] = useState('')

  const navigate = useNavigate();
  

 const handleLogin =async () => {
  const credentials = {
    username,
    password
  }
  

  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', credentials)
    console.log(error.response.data)
    if (response.status === 200) {
      navigate('/')
    } else {
      alert('invalid credentials')
    }

  } catch (error) {
    console.error('error', error)
  setError(true)
  setErrormesage(error.response.data)
  }

}

  return (
    <>
    <Navbar />
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            { error && (
            <span className="text-red-500">{errormessage}</span>
            )}
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
    </>
  );
};

export default LoginPage;

// mor_2314
// 83r5^_