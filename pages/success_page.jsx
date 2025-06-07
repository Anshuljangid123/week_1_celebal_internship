import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    return (
      <div className="text-center text-white mt-20">
        <p>No user data found. Please fill the form first.</p>
        <button onClick={() => navigate("/")} className="text-blue-400 underline mt-4">
          Go to Form
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-zinc-800 p-8 rounded-2xl shadow-2xl border border-zinc-700">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-400">
          ✅ Form Submitted Successfully!
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(user).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="capitalize text-gray-400">{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 px-6 py-2 rounded-lg text-white hover:bg-blue-700"
          >
            Fill Again
          </button>
        </div>
      </div>
    </div>
  );
}
