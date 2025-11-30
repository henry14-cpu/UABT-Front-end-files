import React, { useState } from "react";

export default function EspaceAdmins({ addExam }) {
  const [type, setType] = useState("Test");
  const [days, setDays] = useState([
    { date: "", exams: [{ time: "", module: "", room: "", prof: "" }] },
  ]);

  const handleDayChange = (index, value) => {
    const newDays = [...days];
    newDays[index].date = value;
    setDays(newDays);
  };

  const handleExamChange = (dayIndex, examIndex, field, value) => {
    const newDays = [...days];
    newDays[dayIndex].exams[examIndex][field] = value;
    setDays(newDays);
  };

  const addExamField = (dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].exams.push({ time: "", module: "", room: "", prof: "" });
    setDays(newDays);
  };

  const addDay = () => {
    setDays([...days, { date: "", exams: [{ time: "", module: "", room: "", prof: "" }] }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Flatten and send each exam with type and date
    const allExams = days.flatMap(day =>
      day.exams.map(exam => ({ type, date: day.date, ...exam }))
    );
    addExam(allExams);
    // Reset form
    setDays([{ date: "", exams: [{ time: "", module: "", room: "", prof: "" }] }]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Create Exam Planning</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 border rounded">
          <option value="Test">Test</option>
          <option value="Exam">Exam</option>
          <option value="Resit">Resit</option>
        </select>

        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="p-4 border rounded bg-white space-y-3">
            <h3 className="font-semibold">Day {dayIndex + 1}</h3>
            <input
              type="date"
              value={day.date}
              onChange={e => handleDayChange(dayIndex, e.target.value)}
              className="w-full p-2 border rounded"
            />

            {day.exams.map((exam, examIndex) => (
              <div key={examIndex} className="grid grid-cols-4 gap-2">
                <input
                  type="time"
                  value={exam.time}
                  onChange={e => handleExamChange(dayIndex, examIndex, "time", e.target.value)}
                  className="p-2 border rounded"
                  placeholder="Time"
                />
                <input
                  type="text"
                  value={exam.module}
                  onChange={e => handleExamChange(dayIndex, examIndex, "module", e.target.value)}
                  className="p-2 border rounded"
                  placeholder="Module"
                />
                <input
                  type="text"
                  value={exam.room}
                  onChange={e => handleExamChange(dayIndex, examIndex, "room", e.target.value)}
                  className="p-2 border rounded"
                  placeholder="Room"
                />
                <input
                  type="text"
                  value={exam.prof}
                  onChange={e => handleExamChange(dayIndex, examIndex, "prof", e.target.value)}
                  className="p-2 border rounded"
                  placeholder="Professor"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => addExamField(dayIndex)}
              className="mt-2 bg-green-500 text-white p-2 rounded"
            >
              Add Exam
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addDay}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Add Day
        </button>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
}
