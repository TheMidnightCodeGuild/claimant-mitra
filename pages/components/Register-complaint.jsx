import React, { useState } from 'react';
import Navbar from './Navbar';
import { db, storage } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const RegisterComplaint = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    insuranceType: '',
    complaintType: '',
    policyType: '',
    document: null
  });

  // UI state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [complaintTypes, setComplaintTypes] = useState([]);
  const [policyTypes, setPolicyTypes] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const { id, value, files } = e.target;
    
    if (id === 'document') {
      const file = files[0];
      // Validate file size (max 5MB)
      if (file && file.size > 5 * 1024 * 1024) {
        setError('File size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        document: file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
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
    
    if (!fullName.trim() || !email.trim() || !phone.trim() || !insuranceType || !complaintType) {
      setError('Please fill all required fields');
      return false;
    }

    if (insuranceType === 'General Insurance' && !formData.policyType) {
      setError('Please select a policy type');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!/^\d{10}$/.test(phone.trim())) {
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
    setLoading(true);
    
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      let documentUrl = null;

      // Upload document if exists
      if (formData.document) {
        const storageRef = ref(storage, `complaints/${Date.now()}_${formData.document.name}`);
        await uploadBytes(storageRef, formData.document);
        documentUrl = await getDownloadURL(storageRef);
      }

      // Prepare data for Firestore
      const complaintData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        insuranceType: formData.insuranceType,
        complaintType: formData.complaintType,
        policyType: formData.policyType || null,
        documentUrl,
        createdAt: new Date(),
        status: 'pending'
      };

      // Add to Firestore
      await addDoc(collection(db, 'enquiries'), complaintData);
      
      setSuccess('Complaint registered successfully! We will contact you shortly.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        insuranceType: '',
        complaintType: '',
        policyType: '',
        document: null
      });
      setComplaintTypes([]);
      setPolicyTypes([]);
      
      // Reset file input
      const fileInput = document.getElementById('document');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  // CSS classes
  const inputClasses = "text-body-color border-[f0f0f0] w-full rounded border py-2 px-[14px] text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200";
  const selectClasses = "select appearance-none text-gray-600 text-sm font-normal bg-white border-coolGray-200 shadow-input text-body-color border-[f0f0f0] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full rounded border py-2 px-[16px] outline-none transition-all duration-200";

  return (
    <>
      <Navbar/>
      <section className="h-screen p-4 mt-16 sm:p-6 md:p-10 relative bg-[url('/images/banner.png')] bg-[#101828] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="px-4 relative z-[5] py-4 md:py-6 md:px-8 lg:px-12 text-gray-800">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
              {/* Form Section */}
              <div className="w-full lg:w-[550px] order-2 lg:order-1">
                <div className="block rounded-lg shadow-lg bg-white p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
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
                    <div>
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
                    <div>
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

                    <div>
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
                      <div>
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
                      <div>
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

                    <div>
                      <textarea 
                        id="message"
                        rows="4"
                        placeholder="Describe your complaint in detail"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <input
                        id="document"
                        type="file"
                        onChange={handleInputChange}
                        className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600`}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <p className="text-xs text-gray-500 mt-1">Optional: Upload any relevant documents (Max 5MB - PDF, DOC, Images)</p>
                    </div>
                    
                    {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
                    {success && <div className="text-green-500 text-sm font-medium">{success}</div>}
                    
                    <div className="flex justify-center mt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? 'Submitting...' : 'Submit Your Complaint'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-[650px] text-white order-1 lg:order-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Register Your Insurance Complaint</h1>
                <p className="text-base sm:text-lg mb-6 sm:mb-8">We're here to help resolve your insurance-related issues. Fill out the form with your complaint details and our experts will get back to you shortly.</p>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold">Expert Assistance</h3>
                      <p className="text-gray-300">Get professional help with your insurance complaints</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold">Quick Resolution</h3>
                      <p className="text-gray-300">Fast and efficient complaint resolution process</p>
                    </div>
                  </div>
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
