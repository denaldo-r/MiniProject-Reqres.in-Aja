import React from "react";

const Input = ({ name, placeholder, type, onChange, title }) => {
  return (
    <div className="flex flex-col w-full gap-2 mt-3">
      <h4 className="font-semibold tracking-wide capitalize">{title}</h4>
      <input
        type={type}
        className="px-4 py-2 font-medium bg-gray-200 border-2 rounded-lg placeholder:italic placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
