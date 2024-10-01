import React from 'react';

const CustomInput = ({ label, icon, error, customStyles, ...props }) => {
    return (
        <>
            <div className="flex flex-col w-full my-1.5">
                {/* Render the label if it exists */}
                {label && (
                    <label
                        htmlFor={props.name}
                        className="mb-1 text-sm font-medium text-primary"
                    >
                        {label}
                    </label>
                )}

                <div
                    style={customStyles}
                    className={`flex items-center w-full bg-white px-4 py-0.5 justify-center rounded-md border ${error ? 'border-red-500' : 'border-gray-200'
                        } focus-within:border-black`}
                >
                    {icon && (
                        <div className="text-primary text-lg h-5 pr-1.5">
                            {icon}
                        </div>
                    )}

                    <input
                        id={props.name} // Use the `name` prop to link label and input
                        type={props.type || 'text'} // Use passed type or default to text
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                        className="flex-grow py-3 text-base bg-white border-none shadow-none outline-none text-primary placeholder:text-primary_lite placeholder:font-light"
                    />
                </div>
            </div>
        </>
    );
};

export default CustomInput;
