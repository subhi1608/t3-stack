"use client"
import React, { useState } from 'react';
import { Header } from '../_components/header';

interface OtpInputProps {
  length?: number;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 8 }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (index < length - 1) {
        const nextSibling = element.nextElementSibling as HTMLInputElement;
        if (nextSibling) {
          nextSibling.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index]) {
      if (index > 0) {
        const previousSibling = (e.target as HTMLInputElement).previousElementSibling as HTMLInputElement;
        if (previousSibling) {
          previousSibling.focus();
        }
      }
    }
  };

  return (
    <>
   <Header/> 
    <div className="flex flex-1 flex-col  w-[35%] mx-auto my-10 rounded-2xl border-2 border-[#C1C1C1]  px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Verify your email
      </h2>
      <p className="text-center text-lg  leading-9 tracking-tight text-gray-900">Enter the 8 digit code you have recieved on</p>
      <p className="text-center text-lg font-bold  leading-9 tracking-tight text-gray-900">
      swa***@gmail.com</p>
    </div>
    <div className='px-6 py-2 '>
    {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 mx-1 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
      <div className='py-4'>
      <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-4 text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            VERIFY
          </button>
      </div>
    </div>
    </>
  );
};

export default OtpInput;
