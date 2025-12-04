import React, { useState } from 'react';
import { Plus, Trash2, Calculator, Github, Linkedin } from 'lucide-react';

const FormComponent = () => {
  const [formData, setFormData] = useState([
    { subject: 'Mathematics', marks: 0 },
    { subject: 'Physics', marks: 0 },
    { subject: 'Chemistry', marks: 0 }
  ]);

  const [show, setShow] = useState(false);
  const [defaultMarks, setDefaultMarks] = useState('');

  const applyDefaultMarks = () => {
    if (defaultMarks && !isNaN(defaultMarks)) {
      const updatedData = formData.map(entry => ({
        ...entry,
        marks: Number(defaultMarks)
      }));
      setFormData(updatedData);
      setShow(false);
    }
  };

  const semesterTemplates = {
    sem1_poolA: [
      { subject: 'Chemistry', marks: 0 },
      { subject: 'Manufacturing', marks: 0 },
      { subject: 'Maths', marks: 0 },
      { subject: 'Physics', marks: 0 },
      { subject: 'Electrical Science', marks: 0 }
    ],
    sem1_poolB: [
      { subject: 'Environmental', marks: 0 },
      { subject: 'Manufacturing', marks: 0 },
      { subject: 'Maths', marks: 0 },
      { subject: 'Physics', marks: 0 },
      { subject: 'C Programming', marks: 0 },
      { subject: 'Communication Skills', marks: 0 }
    ],
    sem3: [
      { subject: 'DS', marks: 0 },
      { subject: 'CM', marks: 0 },
      { subject: 'DM', marks: 0 },
      { subject: 'OOPS', marks: 0 },
      { subject: 'DLCD', marks: 0 }
    ],
    sem5: [
      { subject: 'DAA', marks: 0 },
      { subject: 'OS', marks: 0 },
      { subject: 'CD', marks: 0 },
      { subject: 'CN', marks: 0 },
      { subject: 'EFE', marks: 0 },
      { subject: 'SE', marks: 0 }
    ]
  };

  const loadSemester = (semester) => {
    setFormData(semesterTemplates[semester]);
    setShow(false);
  };

  const handleChange = (index, field, value) => {
    const updatedData = [...formData];
    updatedData[index][field] = value;
    setFormData(updatedData);
  };

  const addSubject = () => {
    setFormData([...formData, { subject: '', marks: 0 }]);
    setShow(false);
  };

  const removeSubject = (index) => {
    if (formData.length > 1) {
      const updatedData = formData.filter((_, i) => i !== index);
      setFormData(updatedData);
      setShow(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = formData.map((entry) => ({
      ...entry,
      newMarks1: 55 - Number(entry.marks), // 7 CGPA
      newMarks2: 64 - Number(entry.marks), // 8 CGPA
      newMarks3: 75 - Number(entry.marks), // 9 CGPA
      newMarks4: 90 - Number(entry.marks)  // 10 CGPA
    }));

    setFormData(updatedData);
    setShow(true);
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <p className="text-gray-500 text-sm tracking-wider uppercase">Welcome to</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">CGPA</span>
            <span className="text-pink-500">CALC</span>
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Calculate required marks for your target CGPA For <span className=' font-extrabold'>IPU</span> Endsems
          </p>
          <p className="text-gray-600 text-sm font-mono">
           
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          {/* Quick Select Semester */}
          <div className="p-6 border-b border-zinc-800">
            <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Quick Select Semester:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => loadSemester('sem1_poolA')}
                className="px-4 py-4 bg-zinc-800 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/10 hover:border-pink-500 transition-all font-semibold text-left"
              >
                1st Sem - Pool A
                <span className="block text-xs mt-1 font-normal text-gray-500">Chemistry • Manufacturing • Maths • Physics • Electrical</span>
              </button>
              <button
                type="button"
                onClick={() => loadSemester('sem1_poolB')}
                className="px-4 py-4 bg-zinc-800 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/10 hover:border-pink-500 transition-all font-semibold text-left"
              >
                1st Sem - Pool B
                <span className="block text-xs mt-1 font-normal text-gray-500">Environmental • Manufacturing • Maths • Physics • C • Communication</span>
              </button>
              <button
                type="button"
                onClick={() => loadSemester('sem3')}
                className="px-4 py-4 bg-zinc-800 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/10 hover:border-pink-500 transition-all font-semibold text-left"
              >
                3rd Semester
                <span className="block text-xs mt-1 font-normal text-gray-500">DS • CM • DM • OOPS • DLCD</span>
              </button>
              <button
                type="button"
                onClick={() => loadSemester('sem5')}
                className="px-4 py-4 bg-zinc-800 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/10 hover:border-pink-500 transition-all font-semibold text-left"
              >
                5th Semester
                <span className="block text-xs mt-1 font-normal text-gray-500">DAA • OS • CD • CN • EFE • SE</span>
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-6">
            {/* Set Default Marks */}
            <div className="mb-6 p-4 bg-black border border-zinc-800 rounded-lg">
              <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Set Default Marks for All:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="number"
                  value={defaultMarks}
                  onChange={(e) => setDefaultMarks(e.target.value)}
                  placeholder="Enter marks (e.g., 20)"
                  className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-600"
                />
                <button
                  type="button"
                  onClick={applyDefaultMarks}
                  className="px-6 py-3 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-700 hover:border-pink-500/50 transition-all font-semibold whitespace-nowrap"
                >
                  Apply to All
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Table Header - Desktop */}
              <div className="hidden md:grid md:grid-cols-7 gap-4 pb-4 border-b border-zinc-800">
                <div className="col-span-2 font-semibold text-gray-400 uppercase text-xs tracking-wider">Subject</div>
                <div className="font-semibold text-gray-400 uppercase text-xs tracking-wider text-center">Internal Marks</div>
                <div className="font-semibold text-gray-400 uppercase text-xs tracking-wider text-center">7 CGPA</div>
                <div className="font-semibold text-gray-400 uppercase text-xs tracking-wider text-center">8 CGPA</div>
                <div className="font-semibold text-gray-400 uppercase text-xs tracking-wider text-center">9 CGPA</div>
                <div className="font-semibold text-gray-400 uppercase text-xs tracking-wider text-center">10 CGPA</div>
              </div>

              {/* Subject Rows */}
              <div className="space-y-3">
                {formData.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-black border border-zinc-800 p-4 rounded-lg hover:border-pink-500/30 transition-all relative"
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={entry.subject}
                          onChange={(e) => handleChange(index, 'subject', e.target.value)}
                          placeholder="Subject name"
                          className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-600"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="p-3 bg-zinc-800 text-red-400 border border-zinc-700 rounded-lg hover:bg-red-500/10 hover:border-red-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
                          disabled={formData.length === 1}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">Internal Marks</label>
                        <input
                          type="number"
                          value={entry.marks}
                          onChange={(e) => handleChange(index, 'marks', e.target.value)}
                          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          required
                        />
                      </div>

                      {show && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">7 CGPA</label>
                            <div className={`px-3 py-2 text-center rounded-lg font-bold ${
                              entry.newMarks1 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {entry.newMarks1}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">8 CGPA</label>
                            <div className={`px-3 py-2 text-center rounded-lg font-bold ${
                              entry.newMarks2 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {entry.newMarks2}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">9 CGPA</label>
                            <div className={`px-3 py-2 text-center rounded-lg font-bold ${
                              entry.newMarks3 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {entry.newMarks3}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">10 CGPA</label>
                            <div className={`px-3 py-2 text-center rounded-lg font-bold ${
                              entry.newMarks4 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                              {entry.newMarks4}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-7 gap-4 items-center">
                      <input
                        type="text"
                        value={entry.subject}
                        onChange={(e) => handleChange(index, 'subject', e.target.value)}
                        placeholder="Subject name"
                        className="col-span-2 px-4 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-600"
                        required
                      />
                      
                      <input
                        type="number"
                        value={entry.marks}
                        onChange={(e) => handleChange(index, 'marks', e.target.value)}
                        className="px-4 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        required
                      />

                      <div className={`px-4 py-3 text-center rounded-lg font-bold ${
                        show && entry.newMarks1 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : show ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-900 text-gray-600 border border-zinc-800'
                      }`}>
                        {show ? entry.newMarks1 : '-'}
                      </div>

                      <div className={`px-4 py-3 text-center rounded-lg font-bold ${
                        show && entry.newMarks2 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : show ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-900 text-gray-600 border border-zinc-800'
                      }`}>
                        {show ? entry.newMarks2 : '-'}
                      </div>

                      <div className={`px-4 py-3 text-center rounded-lg font-bold ${
                        show && entry.newMarks3 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : show ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-900 text-gray-600 border border-zinc-800'
                      }`}>
                        {show ? entry.newMarks3 : '-'}
                      </div>

                      <div className={`px-4 py-3 text-center rounded-lg font-bold ${
                        show && entry.newMarks4 > 60 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : show ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-900 text-gray-600 border border-zinc-800'
                      }`}>
                        {show ? entry.newMarks4 : '-'}
                      </div>

                      {/* Delete Button - Desktop */}
                      <button
                        type="button"
                        onClick={() => removeSubject(index)}
                        className="absolute -right-2 -top-2 p-2 bg-zinc-800 text-red-400 border border-zinc-700 rounded-lg hover:bg-red-500/10 hover:border-red-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={formData.length === 1}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={addSubject}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-700 hover:border-pink-500/50 transition-all font-semibold"
                >
                  <Plus size={20} />
                  Add Subject
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold shadow-lg shadow-pink-500/20"
                >
                  <Calculator size={20} />
                  Calculate Results
                </button>
              </div>
            </div>

            {/* Legend */}
            {show && (
              <div className="mt-6 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
                <p className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">Legend:</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-emerald-500/20 border-2 border-emerald-500/30 rounded"></div>
                    <span className="text-gray-400">Achievable (less than 60 marks needed)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500/20 border-2 border-red-500/30 rounded"></div>
                    <span className="text-gray-400">Difficult (more than 60 marks needed)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <div className="flex flex-col items-center md:items-center justify-between gap-4">
            <div>
              {/* <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Developed by</p> */}
              <p className="text-white opacity-50 font-bold text-lg">Meet the Developer </p>
              {/* <p className="text-gray-500 text-sm mt-1">Full Stack Developer</p> */}
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/Rishabh503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-700 hover:border-pink-500/50 transition-all font-semibold"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-tripathi-9985aa319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg hover:bg-zinc-700 hover:border-pink-500/50 transition-all font-semibold"
              >
                <Linkedin size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;