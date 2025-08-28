import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    if (email === "test@example.com" && password === "123456") {
      toast.success("Authentication successful 🎉");
      setTimeout(() => navigate("/profile"), 1000);
    } else {
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white shadow-2xl p-8 w-80 h-[700px] flex flex-col justify-start rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-left">
          Sign in to your PopX account
        </h1>
        <p className="text-gray-600 mb-8 text-left text-sm">
          Welcome back! Please enter your credentials to continue.
        </p>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          
          <div className="relative w-full mt-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
              required
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Email
            </label>
          </div>

          
          <div className="relative w-full mt-6">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
              required
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Password
            </label>
          </div>

          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>

 
      <Toaster position="top-right" />
    </div>
  );
}

export default Signin;
