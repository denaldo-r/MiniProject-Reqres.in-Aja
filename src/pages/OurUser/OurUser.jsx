import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({
    page: 1,
    per_page: 8,
    total: 0,
    total_pages: 0,
  });

  const getUsers = async () => {
    try {
      const data = await axios.get(
        `https://reqres.in/api/users?page=${page.page}`
      );

      setPage({
        ...page,
        per_page: data.data.per_page,
        total: data.data.total,
        total_pages: data.data.total_pages,
      });

      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    setPage({ ...page, page: page.page - 1 });
  };

  const handleNext = () => {
    setPage({ ...page, page: page.page + 1 });
  };

  useEffect(() => {
    document.title = "Our Users | Reqres.in Aja";
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [page.page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-500">
      <Navbar />
      <div className="container p-8 pt-24 mx-auto">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-white drop-shadow-lg">
          Welcome Reqres.in Aja!
        </h1>
        <p className="mt-4 mb-8 text-lg text-center text-white opacity-80">
          Here are our members
        </p>
        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="group bg-white rounded-2xl overflow-hidden h-[350px] w-[300px] flex flex-col items-center justify-center p-6 border border-gray-300 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <div className="mb-4 overflow-hidden transition-transform transform border-2 border-white rounded-full group-hover:scale-110">
                <img
                  src={user.avatar}
                  alt={user.id}
                  className="object-cover w-24 h-24 transition-all duration-300 rounded-full group-hover:rotate-12"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">
                {user.first_name} {user.last_name}
              </p>
              <p className="mt-2 font-medium text-gray-600 opacity-80">
                {user.email}
              </p>
              <Link to={`/user/${user.id}`}>
                <button className="px-6 py-2 mt-6 font-semibold tracking-wider text-white transition-all duration-300 transform bg-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 hover:scale-110">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10 space-x-4">
          <button
            onClick={handleBack}
            disabled={page.page === 1}
            className="px-6 py-3 text-white transition-transform transform bg-indigo-600 rounded-full disabled:bg-indigo-300 disabled:cursor-not-allowed hover:scale-105"
          >
            Prev
          </button>
          <span className="mx-4 text-lg font-semibold text-white">
            {page.page}
          </span>
          <button
            onClick={handleNext}
            disabled={page.page === page.total_pages}
            className="px-6 py-3 text-white transition-transform transform bg-indigo-600 rounded-full disabled:bg-indigo-300 disabled:cursor-not-allowed hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
