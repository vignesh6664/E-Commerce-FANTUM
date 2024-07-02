import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      //   localStorage.setItem('token', res.data.token);
      setMessage("Login successful");
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.message);
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center   ">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
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
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-4 font-medium"
          type="submit"
        >
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
      <p className="mt-4">Don't Have Account ?</p>
      <Link className="mt-4 text-indigo-500 hover:underline" to="/signup">
        SignUp
      </Link>
    </div>
  );
};

export default Login;
