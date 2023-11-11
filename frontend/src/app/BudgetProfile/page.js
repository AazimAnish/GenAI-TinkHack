"use client";

import React, { useState } from 'react';

const BudgetProfile = () => {
  // State to store salary input
  const [salary, setSalary] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the salary or perform any other actions here
    console.log('Salary submitted:', salary);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-8">Budget Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Salary Input */}
        <div className="mb-6">
          <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Your salary
          </label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your salary"
            required
          />
        </div>

        {/* Output Form */}
        {/* You can display the output or perform any other actions based on the submitted salary */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Output</label>
          <div className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {/* Display the output here */}
            {`Salary: ${salary}`}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BudgetProfile;
