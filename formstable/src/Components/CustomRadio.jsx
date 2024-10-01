import React from 'react';

const CustomRadioGroup = ({ label, options, selectedValue, onChange }) => {
    return (
        <div className="w-full">
            {/* Group Label */}
            {label && (
                <label className="block mb-2 text-sm font-medium text-primary">
                    {label}
                </label>
            )}

            <div className="space-y-2">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center">
                        <input
                            type="radio"
                            id={option.value}
                            name="customRadioGroup" // Ensure all radios belong to the same group
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => onChange(option.value)}
                            className="mr-2 text-sec focus:ring-sec"
                        />
                        <label htmlFor={option.value} className="text-base text-primary">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomRadioGroup;
