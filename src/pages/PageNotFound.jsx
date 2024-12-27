import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Not Found | Nmixx";
  }, []);

  return (
    <div className="w-full bg-gray-200">
      <div className="container flex items-center justify-center min-h-screen p-5 mx-auto lg:p-10">
        <div className="flex flex-col items-center justify-center w-full px-4 space-y-8 overflow-hidden border-2 border-black shadow-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-800 py-28 rounded-xl shadow-black">
          <h5 className="font-bold tracking-widest text-center text-white text-9xl">
            404
          </h5>
          <p className="text-4xl font-bold tracking-wide text-center text-white">
            Ooops... We cannot find this page
          </p>
          <Link
            to="/"
            className="flex items-center justify-center w-full py-2 text-xl font-bold text-white border-4 border-white rounded-lg lg:w-1/2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
