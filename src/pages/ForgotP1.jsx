import React from "react";
import { useNavigate } from "react-router-dom";


export default function ForgotP1() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ForgotP2");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat flex flex-col items-center pt-10">
  
  <img 
    src="universite-abou-bekr-belkaid-tlemcen-logo-algeria-removebg-preview (1).png"
    alt="UABT Logo"
    className="w-32 mb-6"
  />

  {/* FIXED WRAPPER */}
  

    <p className="text-center text-[#0B2844] mb-6">
      Departement Informatique
    </p>

    <h1 className="text-2xl font-semibold text-center mb-2 text-[#0B2844]">
      Forgot your password ?
    </h1>

    <form className="space-y-4" onSubmit={handleSubmit}>
      
      {/* Your custom width input */}
      <input
        type="text"
        placeholder="ID / Phone number"
        className="w-[350px] mx-auto block border border-[#3A5377] rounded-md px-4 py-2 bg-[#C6D0E0]/15 focus:outline-none focus:ring-2 focus:ring-[#123456]"
        required
      />

      <button
        type="submit"
        className="w-[120px] mx-auto block border bg-[#123456] text-white rounded-md py-2 hover:bg-[#0e2a3d] transition"
      >
        Next
      </button>
    </form>

  </div>


    
  );
}
