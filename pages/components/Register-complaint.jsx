import React, { useState } from 'react';
import Navbar from './Navbar';

const RegisterComplaint = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    insuranceType: '',
    complaintType: '',
    policyType: ''
  });

  // UI state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [complaintTypes, setComplaintTypes] = useState([]);
  const [policyTypes, setPolicyTypes] = useState([]);

  // Insurance type options mapping
  const insuranceOptions = {
    'Health Insurance': {
      complaints: ['Claim Short-settled', 'Claim Rejected', 'Claim Delayed', 'Policy Related Issues'],
      policies: []
    },
    'Life Insurance': {
      complaints: ['Death Claim Delayed', 'Death Claim Rejected', 'Misselling & Fraud sales', 'Policy Servicing'],
      policies: []
    },
    'General Insurance': {
      complaints: ['Claim Short-settled', 'Claim Rejected', 'Claim Delayed', 'Policy Cancellation'],
      policies: ['Travel', 'Fidelity', 'Marine', 'Property', 'Fire', 'Home Insurance', 'Personal Accident', 'Critical Illness', 'PMSBY Claim', 'Loan Protection Policy', 'Death Claim', 'Others']
    },
    'Motor Insurance': {
      complaints: ['Motor Accident Insurance Claim', 'Motor Theft Claim'],
      policies: []
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    setError('');

    // Handle insurance type change
    if (id === 'insuranceType') {
      const selectedInsurance = insuranceOptions[value];
      if (selectedInsurance) {
        setComplaintTypes(selectedInsurance.complaints);
        setPolicyTypes(selectedInsurance.policies);
        setFormData(prev => ({
          ...prev,
          complaintType: '',
          policyType: ''
        }));
      } else {
        setComplaintTypes([]);
        setPolicyTypes([]);
      }
    }
  };

  // Form validation
  const validateForm = () => {
    const { fullName, email, phone, insuranceType, complaintType } = formData;
    
    if (!fullName || !email || !phone || !insuranceType || !complaintType) {
      setError('Please fill all required fields');
      return false;
    }

    if (insuranceType === 'General Insurance' && !formData.policyType) {
      setError('Please select a policy type');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validateForm()) return;

    try {
      // API call would go here
      setSuccess('Complaint registered successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        insuranceType: '',
        complaintType: '',
        policyType: ''
      });
      setComplaintTypes([]);
      setPolicyTypes([]);
      
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  // CSS classes
  const inputClasses = "text-body-color border-[f0f0f0]  w-full rounded border py-2 px-[14px] text-sm outline-none focus-visible:shadow-none";
  const selectClasses = "select appearance-none text-gray-600 text-sm font-normal bg-white border-coolGray-200 shadow-input text-body-color border-[f0f0f0] focus:border-gray-800 w-full rounded border py-2 px-[16px] outline-none focus-visible:shadow-none";

  return (
    <>
      <Navbar/>
      <section className="lg:h-screen mt-10 p-10 relative bg-[url('/images/banner.png')] bg-[#101828] bg-cover object-cover overflow-x-hidden overflow-y-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="px-4 relative z-[5] py-6 md:py-4 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="lg:max-w-[1300px] w-full mx-auto">
            <div className="lg:flex lg:justify-between lg:gap-12 items-center">
              <div className="mt-20 w-full lg:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-[54px] lg:leading-[60px] md:leading-[60px] lg:text-[45px] text-center text-white font-semibold mb-3 md:mb-5 lg:mb-14 uppercase">
                  Insurance Complaint <br /> Registration Portal
                </h1>
                <p className="text-white text-left md:w-[75%] text-base lg:text-[15px] font-light mb-3 md:mb-8">
                  We are dedicated to helping you resolve your insurance-related concerns. Our complaint registration portal ensures your voice is heard and your issues are addressed promptly and effectively.
                </p>
            
              </div>

              <div className="mb-12 lg:mb-0 mt-10 md:mt-8 lg:w-[550px]">
                <div className="block rounded-lg shadow-lg bg-white p-4">
                  <form id="complaint-form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input 
                        id="fullName"
                        type="text"
                        placeholder="Your Name *"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        id="phone"
                        type="tel"
                        placeholder="Your Phone * (10 digits)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>

                    <div className="mb-4">
                      <div className="relative">
                        <select 
                          id="insuranceType"
                          className={selectClasses}
                          onChange={handleInputChange}
                          value={formData.insuranceType}
                          required
                        >
                          <option value="">Type of Insurance Complaint *</option>
                          {Object.keys(insuranceOptions).map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {formData.insuranceType === 'General Insurance' && (
                      <div className="mb-4">
                        <div className="relative">
                          <select 
                            id="policyType"
                            className={selectClasses}
                            onChange={handleInputChange}
                            value={formData.policyType}
                            required
                          >
                            <option value="">Select Policy Type *</option>
                            {policyTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {formData.insuranceType && (
                      <div className="mb-4">
                        <div className="relative">
                          <select 
                            id="complaintType"
                            className={selectClasses}
                            onChange={handleInputChange}
                            value={formData.complaintType}
                            required
                          >
                            <option value="">Select Complaint Type *</option>
                            {complaintTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <textarea 
                        id="message"
                        rows="5"
                        placeholder="Describe your complaint in detail"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    {success && <div className="text-green-500 mb-2">{success}</div>}
                    
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                      >
                        Submit Your Complaint
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterComplaint;
