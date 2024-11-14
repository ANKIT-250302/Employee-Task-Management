import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // console.log("Form Submited");
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
};

  return (
    <div className="flex h-screen v-screen items-center justify-center">
      <div className=" border-2 border-emerald-600 rounded-xl py-12 px-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className="w-80 outline-none bg-transparent border-2 border-emerald-600 rounded-full text-l py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className="w-80 outline-none bg-transparent mt-3 border-2 border-emerald-600 rounded-full text-l py-3 px-5"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" w-80 outline-none mt-4 bg-emerald-600 rounded-full text- l py-3 px-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
