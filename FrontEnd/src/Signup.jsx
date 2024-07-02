import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });
      setMessage(res.data.message);
      navigate("/");
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center   ">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Signup</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4 ">
          <input
            className="w-full mt-4 shadow-md p-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full mt-4 shadow-md p-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-4 font-medium"
        >
          Signup
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
      <p className="mt-4">Already Have Account ?</p>
      <Link
        to="/login"
        className="mt-4 text-indigo-500 hover:underline"
        type="submit"
      >
        Login
      </Link>
    </div>
  );
};

export default Signup;
