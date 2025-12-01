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
    <div className="flex flex-col min-h-screen bg-[#E6EEF7]">
      {/* Main content area */}
      <div className="flex-grow relative">
        {/* UABT TOP-LEFT */}
        <img
          src="universite-abou-bekr-belkaid-tlemcen-logo-algeria-removebg-preview (1).png"
          alt="UABT Logo"
          className="absolute top-4 left-4 w-14 h-14 object-contain"
        />

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold text-center pt-6 mb-6 text-[#0B2844] font-montserrat">
          Departement Informatique
        </h1>


        <div
          className="absolute top-4 right-4 border-2 border-[#0B2844] rounded-2xl p-2 cursor-pointer"
          onClick={() => navigate("/Login")}
        >
          <img
            src="user-logout.png"
            alt="user-logout"
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="mt-4 border-t border-[#3A5377] w-full"></div>
        <div className="mt-12 flex justify-start ml-8">
          <p className="right-2 text-[#0B2844] text-lg font-semibold font-montserrat">
            Espace Etudiants
          </p>
        </div>

        {/* CENTERED CONTENT CARD */}
        <div className="flex items-center justify-center mt-12">
          <div
            className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]"
            style={{
              width: "1400px",
              height: "250px",
            }}
          >
            <p className="text-left text-[#0B2844] mb-4 text-xl font-semibold font-montserrat">
              Nom Etudiants : BELABBES ABDENNOUR
            </p>
            <p className="text-left text-[#0B2844] mb-4 font-semibold font-montserrat">
              Spécialité : M1GL
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
                    className={`text-[#0B2844] font-montserrat hover:underline ${activeTabS1 === tab ? "underline font-semibold" : ""
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
                    className={`text-[#0B2844] font-montserrat hover:underline ${activeTabS2 === tab ? "underline font-semibold" : ""
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
        {/* SHOW TABLE ONLY WHEN S1 → CC IS SELECTED */}
        {activeTabS1 === "CC" && (
          <div className="flex items-center justify-center mt-12">
            <div className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]">
              <h2 className="text-center text-[#0B2844] font-semibold font-montserrat mb-4">
                PLANNING S1 CC
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-[#3A5377] rounded-lg text-[#0B2844] font-montserrat">
                  <thead>
                    <tr className="text-center bg-[#F8FAFC]">
                      <th className="border border-[#3A5377] px-4 py-3 w-32">
                        <div className="flex flex-col items-center">
                          <span className="font-semibold">Date</span>
                          <span className="text-sm">/Horaire</span>
                        </div>
                      </th>

                      {[
                        { day: "Dimanche", date: "17/11" },
                        { day: "Dimanche", date: "24/11" },
                        { day: "Mardi", date: "3/12" },
                        { day: "Jeudi", date: "12/12" },
                        { day: "Samedi", date: "21/12" },
                      ].map((d, i) => (
                        <th
                          key={i}
                          className="border border-[#3A5377] px-6 py-2 min-w-[150px]"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-semibold">{d.day}</span>
                            <span className="text-sm">{d.date}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        9:30 - 11:00
                      </td>
                      <td className="border border-[#3A5377] px-4 py-4">
                        <div className="font-semibold">iA</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">Anglais</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        11:15 - 12:45
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">CHP</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        13:00 - 14:30
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">WEB</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        14:45 - 16:15
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">UX Design</div>
                        <div className="text-xs">N001</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setActiveTabS1("")}
                  className="px-6 py-1 border border-[#3A5377] rounded-lg text-[#0B2844] hover:bg-gray-100"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
        {/* SHOW TABLE ONLY WHEN S1 → EXAM IS SELECTED */}
        {activeTabS1 === "EXAM" && (
          <div className="flex items-center justify-center mt-12">
            <div className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]">
              <h2 className="text-center text-[#0B2844] font-semibold font-montserrat mb-4">
                PLANNING S1 CC
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-[#3A5377] rounded-lg text-[#0B2844] font-montserrat">
                  <thead>
                    <tr className="text-center bg-[#F8FAFC]">
                      <th className="border border-[#3A5377] px-4 py-3 w-32">
                        <div className="flex flex-col items-center">
                          <span className="font-semibold">Date</span>
                          <span className="text-sm">/Horaire</span>
                        </div>
                      </th>

                      {[
                        { day: "Dimanche", date: "8/01" },
                        { day: "Mardi", date: "10/01" },
                        { day: "Jeudi", date: "12/01" },
                        { day: "Dimanche", date: "15/01" },
                        { day: "Mercredi", date: "18/01" },
                      ].map((d, i) => (
                        <th
                          key={i}
                          className="border border-[#3A5377] px-6 py-2 min-w-[150px]"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-semibold">{d.day}</span>
                            <span className="text-sm">{d.date}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        9:30 - 11:00
                      </td>
                      <td className="border border-[#3A5377] px-4 py-4">
                        <div className="font-semibold">Arduino</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">Anglais</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        11:15 - 12:45
                      </td>
                      <td className="border border-[#3A5377]"> {/* Dimanche */}
                        <div className="font-semibold">Web</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">UX Design</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>


                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        13:00 - 14:30
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">CHP</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        14:45 - 16:15
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">Architechture</div>
                        <div className="text-xs">N001</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setActiveTabS1("")}
                  className="px-6 py-1 border border-[#3A5377] rounded-lg text-[#0B2844] hover:bg-gray-100"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
                {/* SHOW TABLE ONLY WHEN S1 → RATT IS SELECTED */}
        {activeTabS1 === "RATT" && (
          <div className="flex items-center justify-center mt-12">
            <div className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]">
              <h2 className="text-center text-[#0B2844] font-semibold font-montserrat mb-4">
                PLANNING S1 RATT
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-[#3A5377] rounded-lg text-[#0B2844] font-montserrat">
                  <thead>
                    <tr className="text-center bg-[#F8FAFC]">
                      <th className="border border-[#3A5377] px-4 py-3 w-32">
                        <div className="flex flex-col items-center">
                          <span className="font-semibold">Date</span>
                          <span className="text-sm">/Horaire</span>
                        </div>
                      </th>

                      {[
                        { day: "Dimanche", date: "08/06" },
                        { day: "Lundi", date: "09/06" },
                        { day: "Mercredi", date: "11/06" },
                        { day: "Jeudi", date: "12/06" },
                      ].map((d, i) => (
                        <th
                          key={i}
                          className="border border-[#3A5377] px-6 py-2 min-w-[150px]"
                        >
                          <div className="flex flex-col items-center">
                            <span className="font-semibold">{d.day}</span>
                            <span className="text-sm">{d.date}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        9:30 - 11:00
                      </td>
                      <td className="border border-[#3A5377] px-4 py-4">
                        <div className="font-semibold">Arduino</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">Anglais</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>

                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        11:15 - 12:45
                      </td>
                      <td className="border border-[#3A5377]"> {/* Dimanche */}
                        <div className="font-semibold">Web</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">UX Design</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                    </tr>


                    <tr className="text-center">
                      <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                        13:00 - 14:30
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]">
                        <div className="font-semibold">CHP</div>
                        <div className="text-xs">N001</div>
                      </td>
                      <td className="border border-[#3A5377]"></td>
                      <td className="border border-[#3A5377]"></td>
                      
                    </tr>

                    
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setActiveTabS1("")}
                  className="px-6 py-1 border border-[#3A5377] rounded-lg text-[#0B2844] hover:bg-gray-100"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
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