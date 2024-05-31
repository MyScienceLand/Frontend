// src/components/ReportQuestion.js
import React, { useState } from 'react';

const ReportQuestion = () => {
  const [formData, setFormData] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    textField: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Checkbox Form</h2>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Checkbox 1</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="checkbox2"
            checked={formData.checkbox2}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Checkbox 2</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="checkbox3"
            checked={formData.checkbox3}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Checkbox 3</span>
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Text Field
        </label>
        <textarea
          name="textField"
          value={formData.textField}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows="4" // You can adjust the number of rows as needed
        ></textarea>
      </div>
    </div>
  );
};

export default ReportQuestion;
