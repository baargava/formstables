import React from 'react';

const CustomButton = ({ label, onClick, type = 'button', customStyles, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-md font-bold flex  self-end text-white transition duration-300 ease-in-out ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary_lite'
                } ${customStyles}`}
        >
            {label}
        </button>
    );
};

export default CustomButton;
