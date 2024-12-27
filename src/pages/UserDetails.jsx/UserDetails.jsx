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
      console.error("Error fetching user details or quotes:", error);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-gray-100 via-blue-50 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[400px] text-center">
        {/* User Info from Reqres.in */}
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          {user.first_name} {user.last_name}
        </h2>
        <p className="mt-2 text-gray-600">{user.email}</p>
        <p className="mt-4 text-gray-500">ID: {user.id}</p>

        {/* Quote from User from DummyJSON */}
        {quote && (
          <div className="p-4 mt-6 bg-blue-100 rounded-md shadow-md">
            <h3 className="text-lg font-bold text-blue-600">
              Inspirational Quote
            </h3>
            <p className="mt-2 italic text-gray-700">"{quote.quote}"</p>
          </div>
        )}

        {/* Back Button */}
        <Link to="/HomeScreen">
          <button className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Back to Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
