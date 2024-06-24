import React from 'react';

function Button({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className={`px-6 py-2 bg-[var(--secondary-color)] text-white border rounded-md ${
        disabled
          ? 'bg-gray-400'
          : ' hover:border border-primary hover:bg-transparent hover:text-primary bg-[--secondary-color]'
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

export default Button;
