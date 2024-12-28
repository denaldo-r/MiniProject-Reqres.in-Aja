import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import google from "../../assets/google.webp";
import Navbar from "../../components/Navbar";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Welcome Back | Login";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/login", form);
      localStorage.setItem("token", res.data.token);
      setSuccess("Welcome back!");
      setTimeout(() => navigate("/OurUser"), 1500);
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-800 bg-gradient-to-r from-blue-500 to-purple-600">
      <Navbar />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <p className="text-center text-gray-500">
          Welcome back! Please log in.
        </p>

        {error && (
          <p className="p-2 mt-4 text-center text-red-500 bg-red-100 rounded">
            {error}
          </p>
        )}

        {success && (
          <p className="p-2 mt-4 text-center text-green-500 bg-green-100 rounded">
            {success}
          </p>
        )}

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-300"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 mt-1 border rounded focus:ring focus:ring-blue-300"
              placeholder="Your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-blue-300"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full py-2 mt-4 text-black bg-gray-200 rounded hover:bg-gray-300">
          <img src={google} alt="Google" className="inline-block w-5 mr-2" />
          Continue with Google
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Sign Up
          </Link>
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 transition duration-200 hover:text-purple-600"
            >
              Back to Homepage
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Login;
