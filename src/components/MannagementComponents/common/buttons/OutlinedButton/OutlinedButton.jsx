import React from 'react';

function OutlinedButton({ title, type, onClick, disabled, icon: Icon }) {
  return (
    <button
      className={`px-6 py-2  text-[var(--secondary-color)] border rounded-md ${
        disabled
          ? 'bg-gray-400'
          : ' hover:border border-[var(--secondary-color)] hover:bg-transparent hover:text-primary '
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
