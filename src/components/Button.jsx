import React from "react";

const Button = ({ name, className, logo, onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 mt-8 flex justify-center items-center gap-2 text-center text-white rounded-md ${className}`}
      disabled={loading}
    >
      {logo && <img src={logo} className="w-6 h-6" />}
      {loading ? "Loading..." : name}
    </button>
  );
};

export default Button;
