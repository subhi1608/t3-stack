"use client";
import React, { useState } from 'react';
import { Header } from '../_components/header';

interface Interest {
  id: number;
  name: string;
}

const interestsList: Interest[] = [
  { id: 1, name: 'Sports' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Reading' },
  { id: 4, name: 'Traveling' },
  { id: 5, name: 'Cooking' },
  { id: 6, name: 'Gaming' },
];

const UserInterest: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedInterests((prev) =>
      prev.includes(id)
        ? prev.filter((interestId) => interestId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
    <Header/>   
    <div className="flex flex-1 flex-col w-[40%] mx-auto my-10 rounded-2xl border-2 border-[#C1C1C1] px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please mark your interests!</h2>
      <p className="text-center text-medium leading-9 tracking-tight text-gray-900">
      We will keep you notified</p>
      <div className="grid gap-4">
        {interestsList.map((interest) => (
          <label key={interest.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedInterests.includes(interest.id)}
              onChange={() => handleCheckboxChange(interest.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-lg text-[#000000]">{interest.name}</span>
          </label>
        ))}
      </div>
    </div>
    </>
  );
};

export default UserInterest;
