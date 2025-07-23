import React, { useState } from 'react';

// --- Reusable SVG Icon Components ---

const USFlagIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 47 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20.4375C15.5228 20.4375 20 15.9603 20 10.4375C20 4.91465 15.5228 0.4375 10 0.4375C4.47715 0.4375 0 4.91465 0 10.4375C0 15.9603 4.47715 20.4375 10 20.4375Z" fill="#F0F0F0" />
    <path d="M9.56523 10.4375H20C20 9.53492 19.8797 8.66055 19.6555 7.82879H9.56523V10.4375Z" fill="#D80027" />
    <path d="M9.56523 5.22012H18.5323C17.9201 4.22121 17.1374 3.33828 16.2248 2.61141H9.56523V5.22012Z" fill="#D80027" />
    <path d="M10 20.4375C12.3535 20.4375 14.5166 19.6241 16.2248 18.2636H3.77516C5.48336 19.6241 7.64652 20.4375 10 20.4375Z" fill="#D80027" />
    <path d="M1.46773 15.6549H18.5323C19.0237 14.853 19.4048 13.9764 19.6555 13.0462H0.344492C0.595156 13.9764 0.976289 14.853 1.46773 15.6549Z" fill="#D80027" />
    <path d="M4.63219 1.99914H5.54348L4.69582 2.61496L5.01961 3.61141L4.17199 2.99559L3.32437 3.61141L3.60406 2.75059C2.85773 3.37227 2.20359 4.10063 1.66453 4.91219H1.95652L1.41695 5.30418C1.33289 5.44441 1.25227 5.58688 1.175 5.73145L1.43266 6.52445L0.951953 6.1752C0.832461 6.42836 0.723164 6.68723 0.624922 6.95148L0.908789 7.82523H1.95652L1.10887 8.44106L1.43266 9.4375L0.585039 8.82168L0.0773047 9.19059C0.0264844 9.5991 0 10.0152 0 10.4375H10C10 4.91469 10 4.26359 10 0.4375C8.02453 0.4375 6.18301 1.01055 4.63219 1.99914ZM5.01961 9.4375L4.17199 8.82168L3.32437 9.4375L3.64816 8.44106L2.80051 7.82523H3.84824L4.17199 6.82879L4.49574 7.82523H5.54348L4.69582 8.44106L5.01961 9.4375ZM4.69582 5.52801L5.01961 6.52445L4.17199 5.90863L3.32437 6.52445L3.64816 5.52801L2.80051 4.91219H3.84824L4.17199 3.91574L4.49574 4.91219H5.54348L4.69582 5.52801ZM8.60656 9.4375L7.75895 8.82168L6.91133 9.4375L7.23512 8.44106L6.38746 7.82523H7.4352L7.75895 6.82879L8.0827 7.82523H9.13043L8.28277 8.44106L8.60656 9.4375ZM8.28277 5.52801L8.60656 6.52445L7.75895 5.90863L6.91133 6.52445L7.23512 5.52801L6.38746 4.91219H7.4352L7.75895 3.91574L8.0827 4.91219H9.13043L8.28277 5.52801ZM8.28277 2.61496L8.60656 3.61141L7.75895 2.99559L6.91133 3.61141L7.23512 2.61496L6.38746 1.99914H7.4352L7.75895 1.0027L8.0827 1.99914H9.13043L8.28277 2.61496Z" fill="#0052B4" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 8l4 4 4-4" />
  </svg>
);

// --- Reusable Form Field Components ---
interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  helperText?: string;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, children, helperText }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-gray-900">
      {label}
    </label>
    {children}
    {helperText && (
      <p className="text-xs text-gray-500">{helperText}</p>
    )}
  </div>
);

// --- Main Demo Form Component ---
const DemoForm = () => {
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
    restaurantName: '',
    howHeard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Special handler for cellphone that only allows numbers
  const handleCellphoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    
    setFormData(prev => ({
      ...prev,
      cellphone: numericValue
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto max-w-md px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Get a demo of Owner for your restaurant
          </h1>
          <p className="text-sm text-gray-600">
            Contact us below and we'll get back to you ASAP.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Book your free demo</h2>
          
          <div className="space-y-5">
            <FormField id="role" label="Role">
              <div className="relative">
                <select 
                  id="role" 
                  name="role" 
                  value={formData.role}
                  onChange={handleInputChange}
                  required 
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white pr-10"
                >
                  <option value="">Select one...</option>
                  <option value="owner_manager">I'm a restaurant owner or manager</option>
                  <option value="service_provider">I provide services to restaurants</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronDownIcon />
                </div>
              </div>
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              <FormField id="first-name" label="First name">
                <input 
                  type="text" 
                  id="first-name" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name" 
                  required 
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                />
              </FormField>
              <FormField id="last-name" label="Last name">
                <input 
                  type="text" 
                  id="last-name" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name" 
                  required 
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                />
              </FormField>
            </div>

            <FormField id="email" label="Email">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email" 
                required 
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
              />
            </FormField>

            <FormField id="cellphone" label="Cellphone">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 gap-2 text-sm text-gray-700 pointer-events-none">
                  <USFlagIcon />
                  <span className="text-xs font-medium">US</span>
                </div>
                <input 
                  type="tel" 
                  id="cellphone" 
                  name="cellphone" 
                  value={formData.cellphone}
                  onChange={handleCellphoneChange}
                  placeholder="1234567890" 
                  required 
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={15}
                  className="w-full rounded-lg border border-gray-300 pl-16 pr-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono" 
                />
              </div>
            </FormField>

            <FormField 
              id="restaurant-name" 
              label="Restaurant name"
              helperText="Start typing, then select your restaurant from the list"
            >
              <input 
                type="text" 
                id="restaurant-name" 
                name="restaurantName" 
                value={formData.restaurantName}
                onChange={handleInputChange}
                placeholder="Search your restaurant name..." 
                required 
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
              />
            </FormField>
            
            <FormField id="how-heard" label="How did you hear about us?">
              <div className="relative">
                <select 
                  id="how-heard" 
                  name="howHeard" 
                  value={formData.howHeard}
                  onChange={handleInputChange}
                  required 
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white pr-10"
                >
                  <option value="">Select one...</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google</option>
                  <option value="youtube">Youtube</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ChevronDownIcon />
                </div>
              </div>
            </FormField>

            <div className="pt-2">
              <button 
                type="button"
                onClick={() => console.log('Form submitted:', formData)}
                className="w-full flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Get a free demo →
              </button>
            </div>
            
            <p className="text-center text-xs text-gray-500 leading-relaxed">
              By providing us with your information you are consenting to the collection and use of your information in accordance with our{' '}
              <a href="/website-terms" className="text-blue-600 underline hover:text-blue-700">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;