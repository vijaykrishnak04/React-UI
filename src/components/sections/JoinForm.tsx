import React, { useState } from 'react';
import illustration from '../../assets/celeb.png';
import validator from 'validator';

interface FormData {
  phoneNumber: string;
  name: string;
  email: string;
  country: string;
}

interface FormErrors {
  phoneNumber?: string;
  name?: string;
  email?: string;
}

const JoinForm: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: '',
    name: '',
    email: '',
    country: '+91',
  });


  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    tempErrors.phoneNumber = validator.isMobilePhone(formData.phoneNumber) ? '' : 'Invalid phone number';
    tempErrors.name = validator.isEmpty(formData.name) ? 'Name is required' : '';
    if (formData.email && !validator.isEmail(formData.email)) {
      tempErrors.email = 'Invalid email address';
    } else {
      tempErrors.email = '';
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handle form submission with type for event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid', formData);
      // can do api calls
    } else {
      console.log('Validation errors', errors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:p-36 p-8 bg-white">
      <div className="md:w-3/5 mt-6 md:mt-0">
        <h2 className="md:text-5xl text-3xl font-semibold text-sky-300 mb-8 text-center md:text-nowrap">Unlock Exclusive Benefits</h2>
        <form className="space-y-4 md:w-4/5" onSubmit={handleSubmit}>
          {/* Form fields with handleChange and values from formData */}
          <div>
            <label htmlFor="phone-number" className="pl-2 block text-sm font-medium text-gray-700">PHONE NUMBER</label>
            <div className="mt-1 flex">
              <select name="country" className='px-2 mt-1 h-10 block w-full rounded-3xl border border-gray-600 shadow-sm sm:text-sm mr-2' value={formData.country} onChange={handleChange}>
                <option value="+91">+91 India</option>
                <option value="+971">+971 Uae</option>
                <option value="+1">+1 Usa</option>
              </select>
              <input type="text" name="phoneNumber" id="phone-number" className="pl-2 mt-1 block w-full rounded-3xl border border-gray-600 shadow-sm sm:text-sm" placeholder="9456789210" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
          {/* Other fields */}
          <div>
            <label htmlFor="name" className="pl-2 block text-sm font-medium text-gray-700">NAME</label>
            <input type="text" name="name" id="name" className="mt-1 h-10 block w-full rounded-3xl border border-gray-600 shadow-sm sm:text-sm" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="pl-2 block text-sm font-medium text-gray-700">EMAIL (OPTIONAL)</label>
            <input type="email" name="email" id="email" className="mt-1 h-10 block w-full rounded-3xl border border-gray-600 shadow-sm sm:text-sm" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <button type="submit" className="w-full flex justify-center py-1 px-4 border border-transparent rounded-3xl shadow-sm text-xl font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            CONTINUE
          </button>
          <p className='text-slate-500 text-sm font-semibold opacity-80'>Get ready to receive a secret code (OTP) on your phone.</p>
        </form>
      </div>
      <div className="md:w-1/2">
        <img src={illustration} loading='lazy' alt="Unlock Exclusive Benefits" />
      </div>
    </div>
  );
};

export default JoinForm;
