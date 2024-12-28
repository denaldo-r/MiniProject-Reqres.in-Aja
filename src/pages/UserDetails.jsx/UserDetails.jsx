import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserDetails = async () => {
    try {
      const userResponse = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(userResponse.data.data);

      const quoteResponse = await axios.get(
        `https://dummyjson.com/quotes/${id}`
      );
      setQuote(quoteResponse.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-tr from-gray-100 via-blue-50 to-blue-200">
      <div className="flex flex-col w-full max-w-4xl lg:flex-row lg:items-start lg:space-x-6">
        {/* Profile Section */}
        <div className="w-full p-8 bg-white rounded-lg shadow-lg lg:w-1/2">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-32 h-32 rounded-full"
            />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
              {user.first_name} {user.last_name}
            </h2>
            <p className="mt-2 text-gray-600">{user.email}</p>
            <p className="mt-4 text-gray-500">ID: {user.id}</p>
            <Link to="/HomeScreen">
              <button className="px-6 py-2 mt-6 font-semibold tracking-wider text-white transition-all duration-300 transform bg-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 hover:scale-110">
                Back to Users
              </button>
            </Link>
          </div>
        </div>

        {/* Inspirational Quote Section */}
        <div className="w-full p-8 mt-6 bg-white rounded-lg shadow-lg lg:w-1/2 lg:mt-0">
          {quote && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">
                {" "}
                Inspirational Quote{" "}
              </h2>
              <p className="mt-4 text-lg italic text-gray-700">
                "{quote.quote}"
              </p>
              <p className="mt-2 text-sm font-medium text-right text-gray-500">
                - {quote.author}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
