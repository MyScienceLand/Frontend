import React from 'react';

function OutlinedButton({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className={`px-6 py-2  text-primary border rounded-md ${
        disabled
          ? 'bg-gray-400'
          : ' hover:border border-primary hover:bg-transparent hover:text-primary '
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
      {Icon && <Icon />}
    </button>
  );
}

export default OutlinedButton;
