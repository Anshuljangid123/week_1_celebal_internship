import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormPage() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // state variable to hide unhide the password input

  const [formData , setFromData] = useState({
    firstName : "" , 
    lastName : "",
    username : "" ,
    email : "" , 
    password : "" ,
    countryCode : "+91",
    phoneNumber: "",
    country: "India",
    city: "Jaipur",
    panNumber : "",
    aadharNumber: ""
  })
  const handleChange = (e) =>{
    const [name , value] = e.target;
    setFromData((prev) => ({...prev , [name] : value}));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate("/success" , {state : formData});
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-zinc-800 p-8 rounded-2xl shadow-2xl border border-zinc-700">
        <h2 className="text-3xl font-semibold text-center mb-8">Sign Up</h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input

              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-2 pr-10 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 text-zinc-400 hover:text-white focus:outline-none"
            >
              <div className="text-sm">{showPassword ? "hide" : "unhide"}</div>
            </button>
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-sm font-small mb-1">Phone No.</label>
            <div className="flex space-x-2">
              {/* Country Code Selector */}
              <select className="w-1/3 text-xs font-small px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+49">🇩🇪 +49</option>
              </select>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="9876543210"
                className="w-2/3 px-4 py-2  bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <select className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Jaipur</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>

          {/* PAN No */}
          <div>
            <label className="block text-sm font-medium mb-1">PAN Number</label>
            <input
              type="text"
              placeholder="ABCDE1234F"
              className="w-full px-4 py-2 uppercase bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Aadhar No */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Aadhar Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-2 rounded-lg shadow"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
