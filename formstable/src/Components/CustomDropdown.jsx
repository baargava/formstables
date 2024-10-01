import React, { useState } from 'react';

const CustomDropdown = ({ label, options, placeholder, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleOptionClick = (option) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false); // Close the dropdown after selecting
    };

    return (
        <div className="relative w-full">
            {/* Dropdown Toggle */}
            {label && (
                <label
                    htmlFor={label}
                    className="mb-1 text-sm font-medium text-primary"
                >
                    {label}
                </label>
            )}
            <div
                className="flex items-center justify-between px-4 py-2 my-2 bg-white border border-gray-200 rounded-md cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-base text-primary">
                    {selected ? selected.label : placeholder}
                </span>
                <svg
                    className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-white rounded-md shadow-md max-h-60">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-black text-primary"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
