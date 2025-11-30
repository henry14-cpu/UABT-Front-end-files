import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          matricule,
          password,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      // If login successful → navigate to dashboard
      navigate("/EspaceEnseignants");

    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#E6EEF7] font-montserrat flex flex-col items-center pt-10">
      <img
        src="universite-abou-bekr-belkaid-tlemcen-logo-algeria-removebg-preview (1).png"
        alt="UABT Logo"
        className="w-32 mb-6"
      />

      <div className="bg-[#E6EEF7] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-2 text-[#0B2844]">
          UABT
        </h1>

        <p className="text-center text-[#0B2844] mb-6">
          Departement Informatique
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            className="w-full border border-[#3A5377] rounded-md px-4 py-2 bg-[#C6D0E0]/15 focus:outline-none focus:ring-2 focus:ring-[#123456]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#3A5377] rounded-md px-4 py-2 bg-[#C6D0E0]/15 focus:outline-none focus:ring-2 focus:ring-[#123456]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#123456] text-white rounded-md py-2 hover:bg-[#0e2a3d] transition"
          >
            Log In
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-2">{error}</p>
        )}

        <p
          className="text-right text-sm text-gray-400 mt-2 cursor-pointer hover:underline"
          onClick={() => navigate("/ForgotP1")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
}