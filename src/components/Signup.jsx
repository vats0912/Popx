import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Full Name is required";
    if (!formData.phone.match(/^[0-9]{10}$/)) return "Enter a valid 10-digit phone number";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Enter a valid email address";
    if (formData.password.length < 6) return "Password must be at least 6 characters";
    if (!formData.agency) return "Please select if you are an agency";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

   
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Creating your account...",
       success: () => {
          // Redirect to profile after success
          setTimeout(() => navigate("/profile"), 1000);
          return "Account created successfully! 🎉";
        },
        error: "Something went wrong. Please try again.",
      }
    );

   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white shadow-2xl p-8 w-80 h-[750px] flex flex-col justify-start rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-left">
          Create your PopX account
        </h1>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          
          <div className="relative w-full mt-4">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Full Name
            </label>
          </div>

          
          <div className="relative w-full mt-4">
            <input
              type="number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
            <label
              htmlFor="phone"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Phone number
            </label>
          </div>

         
          <div className="relative w-full mt-4">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Email address
            </label>
          </div>

         
          <div className="relative w-full mt-6">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Password
            </label>
          </div>

          
          <div className="relative w-full mt-4">
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="peer w-full border border-gray-400 h-10 rounded-md px-3 text-gray-700 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none"
            />
            <label
              htmlFor="company"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600"
            >
              Company name
            </label>
          </div>

          
          <div className="space-x-6 mt-4">
            <p className="mb-2">Are you an agency?</p>
            <span>
              <input
                type="radio"
                id="yes"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="yes">Yes</label>
            </span>

            <span>
              <input
                type="radio"
                id="no"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
                className="ml-6 mr-2 cursor-pointer"
              />
              <label htmlFor="no">No</label>
            </span>
          </div>

          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200 mt-10"
          >
            Create account
          </button>
        </form>
      </div>

     
      <Toaster position="top-right" />
    </div>
  );
}

export default Signup;
