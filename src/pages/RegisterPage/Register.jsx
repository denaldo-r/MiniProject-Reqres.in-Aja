import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmation_password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Join Us | Register";
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    if (form.password !== form.confirmation_password) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        email: form.email,
        password: form.password,
      };
      const res = await axios.post("https://reqres.in/api/register", payload);

      setSuccess("Account successfully created!");
      setTimeout(() => {
        navigate("/register");
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-sans text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <Navbar />
      <div className="w-full max-w-lg p-8 text-gray-800 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-center text-purple-700">
          Create Your Account
        </h2>
        <p className="mb-6 text-sm text-center text-gray-500">
          Join us and explore new opportunities.
        </p>

        {error && (
          <div className="p-3 mb-4 text-center text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 mb-4 text-center text-green-700 bg-green-100 rounded">
            {success}
          </div>
        )}

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmation_password"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-purple-400"
              placeholder="Re-enter your password"
              value={form.confirmation_password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`w-full p-3 text-white rounded ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/" className="text-purple-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-gray-500 transition duration-200 hover:text-purple-600"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
