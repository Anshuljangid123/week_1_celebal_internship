import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // state variable to hide unhide the password input
  const [passwordError,setPasswordError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [panError, setPanError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "+91",
    phoneNumber: "",
    country: "India",
    city: "Jaipur",
    panNumber: "",
    aadharNumber: "",
  });
  const validatePassword = (password) => {
    const minLength = /.{6,}/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password)) {
      return "Password must be at least 6 characters long.";
    }
    if (!hasNumber.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!hasSpecialChar.test(password)) {
      return "Password must contain at least one special character.";
    }

    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
   };

   const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number)) {
        return "Phone number must be exactly 10 digits.";
    }
    return "";
   };

   const validatePanNumber = (pan) => {
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        if (!panRegex.test(pan)) {
            return "Invalid PAN format (e.g., ABCDE1234F)";
        }
        return "";
    };

    const validateAadharNumber = (aadhar) => {
        const aadharRegex = /^\d{12}$/;  // exactly 12 digits
        if (!aadharRegex.test(aadhar)) {
            return "Aadhar number must be exactly 12 digits";
        }
        return "";
    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
        const error = validatePassword(value);
        setPasswordError(error);
    }
    if (name === "email") {
        const error = validateEmail(value);
        setEmailError(error);
    }
    if (name === "phoneNumber") {
        const error = validatePhoneNumber(value);
        setPhoneError(error);
    }
    if (name === "panNumber") {
        const panValue = value.toUpperCase(); // PAN should be uppercase
        const error = validatePanNumber(panValue);
        setPanError(error);
        setFormData((prev) => ({ ...prev, [name]: panValue }));
        return;
    }

    if (name === "aadharNumber") {
        // Remove any non-digit characters (optional, if you want to auto-clean input)
        const cleanValue = value.replace(/\D/g, "");
        const error = validateAadharNumber(cleanValue);
        setAadharError(error);
        setFormData((prev) => ({ ...prev, [name]: cleanValue }));
        return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: formData });
  };

  const isFormValid =
        formData.firstName.trim() &&
        formData.lastName.trim() &&
        formData.username.trim() &&
        formData.email.trim() &&
        formData.password &&
        formData.phoneNumber &&
        formData.panNumber &&
        formData.aadharNumber &&
        !emailError &&
        !passwordError &&
        !phoneError &&
        !panError &&
        !aadharError;


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
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          {/* Password */}

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
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
            {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-sm font-small mb-1">Phone No.</label>
            <div className="flex space-x-2">
              {/* Country Code Selector */}
              <select
                className="w-1/3 text-xs font-small px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+49">🇩🇪 +49</option>
              </select>

              {/* Phone Number Input */}
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-2/3 px-4 py-2  bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <select
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
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
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              placeholder="ABCDE1234F"
              className="w-full px-4 py-2 uppercase bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {panError && <p className="text-red-500 text-xs mt-1">{panError}</p>}
          </div>

          {/* Aadhar No */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Aadhar Number
            </label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012"
              className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {aadharError && <p className="text-red-500 text-xs mt-1">{aadharError}</p>}
        </form>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-2 rounded-lg shadow ${
                isFormValid
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
