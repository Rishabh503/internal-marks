import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState([
    { subject: 'a', marks: 0 },
    { subject: 'b', marks: 0 },
    { subject: 'c', marks: 0 },
    { subject: 'd', marks: 0 },
    { subject: 'e', marks: 0 },
    { subject: 'f', marks: 0 }
  ]);

  const [show, setShow] = useState(false)

  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = formData.map((entry) => ({
      ...entry,
      newMarks1: 64 - Number(entry.marks),
      newMarks2: 75 - Number(entry.marks),
      newMarks3: 90 - Number(entry.marks)
    }));

    setFormData(updatedData);
    setShow(true)
    console.log('Updated Form Data:', updatedData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-xl font-bold mb-6 text-center">Subject Marks Input Form</h2>
        <div className="grid grid-cols-5 gap-4 mb-4 font-medium">
          <p className="text-center">Subject</p>
          <p className="text-center">Internal Marks</p>
          <p className="text-center">8 CGPA</p>
          <p className="text-center">9 CGPA</p>
          <p className="text-center">10 CGPA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formData.map((entry, index) => (
            <div key={index} className="grid grid-cols-5 gap-2 py-1">
              <input
                type="text"
                value={entry.subject}
                onChange={(e) => handleChange(index, 'subject', e.target.value)}
                className="border text-md  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                value={entry.marks}
                onChange={(e) => handleChange(index, 'marks', e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className={`p-2 text-center ${entry.newMarks1 > 60 ? "bg-red-400" : "bg-white"} border rounded-lg`}>
  {entry.newMarks1}
</p>

              <p className={`p-2 text-center ${entry.newMarks2 > 60 ? "bg-red-400" : "bg-white"} border rounded-lg`}>{entry.newMarks2}</p>
             <p className={`p-2 text-center ${entry.newMarks3 > 60 ? "bg-red-400" : "bg-white"} border rounded-lg`}>{entry.newMarks3}</p>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
          >
            Calculate Result
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
