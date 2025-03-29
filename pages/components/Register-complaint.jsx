import React, { useState } from 'react';
import Navbar from './Navbar';

const RegisterComplaint = () => {
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [complaintTypes, setComplaintTypes] = useState([]);
  const [policyTypes, setPolicyTypes] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInsuranceChange = (e) => {
    const insurance = e.target.value;
    setSelectedInsurance(insurance);
    
    switch(insurance) {
      case 'Health Insurance':
        setComplaintTypes(['Claim Short-settled', 'Claim Rejected', 'Claim Delayed', 'Policy Related Issues']);
        setPolicyTypes([]);
        break;
      case 'Life Insurance':
        setComplaintTypes(['Death Claim Delayed', 'Death Claim Rejected', 'Misselling & Fraud sales', 'Policy Servicing']);
        setPolicyTypes([]);
        break;
      case 'General Insurance': 
        setComplaintTypes(['Claim Short-settled', 'Claim Rejected', 'Claim Delayed', 'Policy Cancellation']);
        setPolicyTypes(['Travel', 'Fidelity', 'Marine', 'Property', 'Fire', 'Home Insurance', 'Personal Accident', 'Critical Illness', 'PMSBY Claim', 'Loan Protection Policy', 'Death Claim', 'Others']);
        break;
      case 'Motor Insurance':
        setComplaintTypes(['Motor Accident Insurance Claim', 'Motor Theft Claim']);
        setPolicyTypes([]);
        break;
      default:
        setComplaintTypes([]);
        setPolicyTypes([]);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !selectedInsurance) {
      document.getElementById('errmsg').innerHTML = 
        '<p class="text-red-500">Please fill all required fields</p>';
      return;
    }

    try {
      document.getElementById('success_msg').innerHTML = 
        '<p class="text-green-500 mb-3">Complaint registered successfully!</p>';
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      setSelectedInsurance('');
      setComplaintTypes([]);
      setPolicyTypes([]);
      
    } catch (error) {
      document.getElementById('errmsg').innerHTML = 
        '<p class="text-red-500">Something went wrong. Please try again.</p>';
    }
  };

  const inputClasses = "text-body-color border-[f0f0f0] focus:border-siddhi2 w-full rounded border py-2 px-[14px] text-sm outline-none focus-visible:shadow-none";
  const selectClasses = "select appearance-none text-gray-600 text-sm font-normal bg-white border-coolGray-200 shadow-input text-body-color border-[f0f0f0] focus:border-gray-800 w-full rounded border py-2 px-[16px] outline-none focus-visible:shadow-none";

  return (
    <>
      <Navbar/>
      <section className="lg:h-[600px] mt-10 p-10 relative bg-[url('/images/banner.png')] bg-[#101828] bg-cover object-cover overflow-x-hidden overflow-y-hidden">
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
                <div className="justify-start text-left mt-7">
                  <a href="#complaint-form" className="bg-siddhi1 py-3 px-5 rounded-lg text-white font-medium mb-4 md:mb-6">Get Started</a>
                </div>
              </div>

              <div className="mb-12 lg:mb-0 mt-10 md:mt-8 lg:w-[550px]">
                <div className="block rounded-lg shadow-lg bg-white p-4">
                  <form id="complaint-form" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input 
                        id="fullName"
                        type="text"
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>
                    <div className="mb-4">
                      <input 
                        id="phone"
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>

                    <div className="mb-4">
                      <div className="relative">
                        <select 
                          id="insuranceType"
                          className={selectClasses}
                          onChange={handleInsuranceChange}
                          value={selectedInsurance}
                        >
                          <option value="" disabled>Type of Insurance Complaint</option>
                          <option value="Health Insurance">Health Insurance</option>
                          <option value="Life Insurance">Life Insurance</option>
                          <option value="General Insurance">General Insurance</option>
                          <option value="Motor Insurance">Motor Insurance</option>
                        </select>
                      </div>
                    </div>

                    {selectedInsurance === 'General Insurance' && (
                      <div className="mb-4">
                        <div className="relative">
                          <select 
                            id="policyType"
                            className={selectClasses}
                          >
                            <option value="" disabled>Select Policy Type</option>
                            {policyTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {selectedInsurance && (
                      <div className="mb-4">
                        <div className="relative">
                          <select 
                            id="complaintType"
                            className={selectClasses}
                          >
                            <option value="" disabled>Select Complaint Type</option>
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
                    
                    <div id="errmsg" className="mb-2"></div>
                    <div id="success_msg" className="mb-2"></div>
                    
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
