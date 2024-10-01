import React, { useState } from 'react';
import CustomInput from '../Components/CustomInput';
import { AiOutlineMail } from 'react-icons/ai';
import CustomDropdown from '../Components/CustomDropdown';
import CustomRadioGroup from '../Components/CustomRadio';
import CustomButton from '../Components/CustomButton';
import { Formik } from 'formik';
import * as Yup from 'yup';

const radioOptions = [
    { label: 'All', value: 'option1' },
    { label: 'Some', value: 'option2' },
    { label: 'None', value: 'option3' },
];

const Forms = () => {
    const [selectedOption, setSelectedOption] = useState(radioOptions[0].value);

    const dropdownOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleSelect = (option) => {
        console.log('Selected option:', option);
    };

    const handleRadioChange = (value) => {
        setSelectedOption(value);
        console.log('Selected radio option:', value);
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        siteName: Yup.string().required('Required'),
        selectedOption: Yup.string().required('Required'),
        dropdownValue: Yup.string().required('Required'),
    });

    return (
        <div className="flex flex-col items-center justify-center mx-4 mt-8">
            <div className="w-full max-w-2xl mx-4">
                <Formik
                    initialValues={{
                        email: '',
                        siteName: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values));
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <CustomInput
                                label="Email Address"
                                icon={<AiOutlineMail />}
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && errors.email}
                            />
                            {touched.email && errors.email && (
                                <p className="text-red-500 text-bold">{errors.email}</p>
                            )}

                            <CustomInput
                                label="Site Name"
                                type="text"
                                name="siteName"
                                placeholder="Enter Your Site Name"
                                value={values.siteName}
                                onChange={handleChange}
                                error={touched.siteName && errors.siteName}
                            />
                            {touched.siteName && errors.siteName && (
                                <p className="text-red-500 text-bold">{errors.siteName}</p>
                            )}

                            <CustomDropdown
                                label="Choose an Option"
                                options={dropdownOptions}
                                placeholder="Select an option"
                                onSelect={handleSelect}
                            />

                            <CustomRadioGroup
                                label="Select A Radio Button"
                                options={radioOptions}
                                selectedValue={selectedOption}
                                onChange={handleRadioChange}
                            />

                            <div className="items-center justify-between md:flex">
                                <CustomInput
                                    label="Horizontal Input 1"
                                    type="text"
                                    placeholder="Enter Input 1"
                                />
                                <CustomInput
                                    label="Horizontal Input 2"
                                    type="text"
                                    customStyles={{ marginLeft: '5px' }}
                                    placeholder="Enter Input 2"
                                />
                            </div>

                            <div className="flex flex-row items-end justify-end">
                                <CustomButton
                                    label="Submit Form"
                                    onClick={handleSubmit}
                                    disabled={false}
                                    customStyles="mt-4"
                                />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Forms;
