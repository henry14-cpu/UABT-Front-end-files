import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EspaceEtudiants() {
  const navigate = useNavigate();
  const [activeTabS1, setActiveTabS1] = useState(""); // Active tab for S1
  const [activeTabS2, setActiveTabS2] = useState(""); // Active tab for S2

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/EspaceEtudiants");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main content area */}
      <div className="flex-grow relative">
        {/* UABT TOP-LEFT */}
        <img
          src="universite-abou-bekr-belkaid-tlemcen-logo-algeria-removebg-preview (1).png"
          alt="UABT Logo"
          className="absolute top-4 left-4 w-14 h-14 object-contain"
        />

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold text-center pt-6 mb-6 text-[#0B2844]">
          Departement Informatique
        </h1>

        <img
          src="user-logout.png"
          alt="user-logout"
          className="absolute top-4 right-4 w-6 h-6 object-contain"
        />

        <div className="mt-12 flex justify-start ml-8">
          <p className="right-2 text-[#0B2844] text-lg font-semibold font-montserrat">
            Espace Etudiants
          </p>
        </div>

        {/* CENTERED CONTENT CARD */}
        <div className="flex items-center justify-center mt-12">
          <div
            className="bg-white shadow-lg rounded-lg p-6 border-2 border-[#3A5377]"
            style={{
              width: "1400px",
              height: "250px",
            }}
          >
            <p className="text-left text-[#0B2844] mb-4 text-xl font-semibold font-montserrat">
              Nom Etudiants :
            </p>
            <p className="text-left text-[#0B2844] mb-4 font-semibold font-montserrat">
              Spécialité :
            </p>
            <p className="text-left text-[#0B2844] mb-4 font-semibold font-montserrat">
              Semestres :
            </p>

            {/* S1 */}
            <div className="flex items-center space-x-4 mb-2">
              <p className="text-[#0B2844] font-regular font-montserrat w-12">
                S1
              </p>
              <div className="flex space-x-3">
                {["CC", "EXAM", "RATT"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabS1(tab)}
                    className={`text-[#0B2844] font-montserrat hover:underline ${
                      activeTabS1 === tab ? "underline font-semibold" : ""
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* S2 */}
            <div className="flex items-center space-x-4 mb-2">
              <p className="text-[#0B2844] font-regular font-montserrat w-12">
                S2
              </p>
              <div className="flex space-x-3">
                {["CC", "EXAM", "RATT"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTabS2(tab)}
                    className={`text-[#0B2844] font-montserrat hover:underline ${
                      activeTabS2 === tab ? "underline font-semibold" : ""
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Your form content */}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright footer positioned at the bottom of the page */}
      <footer className="bg-white border-t border-[#768FA6] mt-auto">
        <div className="px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-[#768FA6] font-montserrat">
              Copyright © 2014 Université Abou Bekr Belkaïd Tlemcen. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}