"use client";

import React, { useState } from 'react';
import AviatoIcon from "@/components/aviatoIcon";
import Link from "next/link";

const BasicForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userTypes, setUserTypes] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserTypes((prev) =>
      prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email, companyName, userTypes });
    // Handle form submission logic here
  };

  const handleBack = () => {
    // Logic to navigate back (you could use router.push or similar)
    console.log("Back button clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <div className="flex justify-center mb-4">
          <AviatoIcon />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#023e34]">How do you intend to use Aviato?</h2>
        <p className="text-center text-[#023e34]">Fill out the form below and one of our specialists will be in touch. Note this does not link anywhere!</p>

        <Link href="/">
          <button
            type="button"
            onClick={handleBack}
            className="w-full bg-gray-300 text-black font-semibold py-2 rounded-lg hover:bg-gray-400 transition duration-200 mb-4"
          >
            Back
          </button>
        </Link>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">What is your work email?</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#023e34] transition"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">What is your company name?</label>
          <input
            type="text"
            id="company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#023e34] transition"
            required
          />
        </div>

        <fieldset className="space-y-2">
          <legend className="block text-sm font-medium text-gray-700">User Types:</legend>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Investment Bank"
                checked={userTypes.includes('Investment Bank')}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Investment Bank
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="VC"
                checked={userTypes.includes('VC')}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              VC
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Private Equity"
                checked={userTypes.includes('Private Equity')}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Private Equity
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Just me"
                checked={userTypes.includes('Just me')}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Just me
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-[#023e34] text-white font-semibold py-2 rounded-lg hover:bg-[#036b68] transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
