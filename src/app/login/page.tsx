"use client";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Header } from "../_components/header";

interface LoginFormProps {
  length?: number;
}

const LoginForm :React.FC<LoginFormProps> = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createPost = api.user.create.useMutation({
    onSuccess: (data) => {
      setEmail("")
      setPassword("")
    },
  });


  return (
    <>
    <Header/>    
    <div className="flex flex-1 flex-col w-[40%] mx-auto my-10 rounded-2xl border-2 border-[#C1C1C1]   px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Login
      </h2>
      <p className="text-center text-2xl mt-10  leading-9 tracking-tight text-gray-900">Welcome back to ECOMMERCE</p>
      <p className="text-center text-lg   leading-9 tracking-tight text-gray-900">
      The next gen business marketplace</p>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6"  method="POST"
        onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ email,password });
      }}
        >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-4 text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LOGIN
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Don't have an Account?{' '}
        <a href="#" className="font-semibold leading-6 hover:text-indigo-500">
          SIGN UP
        </a>
      </p>
    </div>
    </div>
    </>
  );
}
export default LoginForm;
