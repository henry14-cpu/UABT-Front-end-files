import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EspaceEnseignants() {
  const navigate = useNavigate();
  const [activeTabS1, setActiveTabS1] = useState("");
  const [activeTabS2, setActiveTabS2] = useState("");
  const [messageS2, setMessageS2] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/EspaceEnseignants");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#E6EEF7]">

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
          Espace Enseignants
        </p>
      </div>

      {/* CENTERED LOGIN CARD */}
      <div className="flex items-center justify-center mt-12">
        <div
          className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]"
          style={{ width: "1400px", height: "250px" }}
        >
          <p className="text-left text-[#0B2844] mb-4 text-xl font-semibold font-montserrat">
            Nom Enseignant : ABDELKADER GHAZZAL
          </p>

          <p className="text-left text-[#0B2844] mb-2 font-semibold font-montserrat">
            Semestres :
          </p>

          {/* S1 */}
          <div className="flex items-center space-x-4 mb-2">
            <p className="text-[#0B2844] font-regular font-montserrat w-12">S1</p>
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
          {/* S2 */}
          <div className="flex items-center space-x-4 mb-2">
            <p className="text-[#0B2844] font-regular font-montserrat w-12">S2</p>
            <div className="flex space-x-3">
              {["CC", "EXAM", "RATT"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTabS2(tab);

                    if (tab === "CC") {
                      setMessageS2("Le planning du semestre S2 n'est pas encore disponible.");
                    } else if (tab === "EXAM") {
                      setMessageS2("Les examens S2 seront publiés prochainement.");
                    } else if (tab === "RATT") {
                      setMessageS2("Les rattrapages S2 seront ajoutés bientôt.");
                    }
                  }}
                  className={`text-[#0B2844] font-montserrat hover:underline ${activeTabS2 === tab ? "underline font-semibold" : ""
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* MESSAGE APPEARS HERE */}
          {messageS2 && (
            <p className="text-red-600 font-montserrat mt-2 ml-16">
              {messageS2}
            </p>
          )}


          <form className="space-y-4" onSubmit={handleSubmit}></form>
        </div>
      </div>

      {/* SHOW TABLE ONLY WHEN S1 → CC IS SELECTED */}
      {activeTabS1 === "CC" && (
        <div className="flex items-center justify-center mt-12">
          <div className="bg-[#EEF2F8] shadow-lg rounded-lg p-6 border-2 border-[#3A5377]">
            <h2 className="text-center text-[#0B2844] font-semibold font-montserrat mb-4">
              PLANNING Surveillance S1 CC
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
                      { day: "Mercredi", date: "17/11" },
                      { day: "Dimanche", date: "21/11" },
                      { day: "Mardi", date: "8/12" },
                      { day: "Jeudi", date: "17/12" },
                      { day: "Samedi", date: "26/12" },
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
                      <div className="font-semibold">Algo</div>
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
                      <div className="font-semibold">Algebre</div>
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
                      <div className="font-semibold">Compilation</div>
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
                      <div className="font-semibold">MN</div>
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
              PLANNING Surveillance S1 EXAM
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
                      { day: "Mercredi", date: "17/01" },
                      { day: "Dimanche", date: "21/01" },
                      { day: "Mardi", date: "23/01" },
                      { day: "Jeudi", date: "25/01" },
                      { day: "Samedi", date: "27/01" },
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
                      <div className="font-semibold">Algo</div>
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
                      <div className="font-semibold">Algebre</div>
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
                      <div className="font-semibold">Compilation</div>
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
                      <div className="font-semibold">MN</div>
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
              PLANNING Surveillance S1 RATT
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
                      { day: "Dimanche", date: "17/06" },
                      { day: "Lundi", date: "18/06" },
                      { day: "Mardi", date: "19/06" },

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
                      <div className="font-semibold">Algo</div>
                      <div className="text-xs">N001</div>
                    </td>
                    <td className="border border-[#3A5377]"></td>
                    <td className="border border-[#3A5377]"></td>


                  </tr>

                  <tr className="text-center">
                    <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                      11:15 - 12:45
                    </td>
                    <td className="border border-[#3A5377]"></td>
                    <td className="border border-[#3A5377]"></td>
                    <td className="border border-[#3A5377]">
                      <div className="font-semibold">Algebre</div>
                      <div className="text-xs">N001</div>
                    </td>

                  </tr>

                  <tr className="text-center">
                    <td className="border border-[#3A5377] px-4 py-4 font-semibold">
                      13:00 - 14:30
                    </td>
                    <td className="border border-[#3A5377]"></td>
                    <td className="border border-[#3A5377]">
                      <div className="font-semibold">Compilation</div>
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
      <footer className="bg-white border-t border-[#768FA6] mt-auto">
        <div className="px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-[#768FA6] font-montserrat">
              Copyright © 2014 Université Abou Bekr Belkaïd Tlemcen. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
