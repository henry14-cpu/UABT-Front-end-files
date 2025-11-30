import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotP2() {
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // auto move to next input
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCode = code.join("");

    if (finalCode.length !== 4) {
      alert("Please enter the 4-digit code.");
      return;
    }

    navigate("/ForgotP3");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat flex flex-col items-center pt-10">

      <img
        src="universite-abou-bekr-belkaid-tlemcen-logo-algeria-removebg-preview (1).png"
        alt="UABT Logo"
        className="w-32 mb-6"
      />

      <p className="text-center text-[#0B2844] mb-6">
        Departement Informatique
      </p>

      <h1 className="text-2xl font-semibold text-center mb-2 text-[#0B2844]">
        Forgot your password ?
      </h1>

      <p className="text-center text-[#0B2844] mb-6">
        Please enter the code sent to your email
      </p>

      {/* CODE INPUTS */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center gap-4 mb-4">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={code[i]}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-14 h-14 text-center text-xl border border-[#3A5377] rounded-md bg-[#C6D0E0]/15 focus:outline-none focus:ring-2 focus:ring-[#123456]"
            />
          ))}
        </div>

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
