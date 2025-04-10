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
    documents: [], // Changed to array
    policyHolder: '',
    aadharNo: '',
    address: ''
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
    
    if (id === 'documents') {
      const fileArray = Array.from(files);
      // Validate each file size (max 5MB)
      const invalidFiles = fileArray.filter(file => file.size > 5 * 1024 * 1024);
      if (invalidFiles.length > 0) {
        setError('Each file size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...fileArray]
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

  // Remove file from selection
  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  // Form validation
  const validateForm = () => {
    const { fullName, email, phone, insuranceType, complaintType, policyHolder, aadharNo, address } = formData;
    
    if (!fullName.trim() || !email.trim() || !phone.trim() || !insuranceType || !complaintType || !policyHolder.trim() || !aadharNo.trim() || !address.trim()) {
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

    if (!/^\d{12}$/.test(aadharNo.trim())) {
      setError('Please enter a valid 12-digit Aadhar number');
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
      let fileBucket = [];

      // Upload all documents if they exist
      if (formData.documents.length > 0) {
        for (const file of formData.documents) {
          const storageRef = ref(storage, `complaints/${Date.now()}_${file.name}`);
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);
          fileBucket.push(url);
        }
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
        policyHolder: formData.policyHolder,
        aadharNo: formData.aadharNo,
        address: formData.address,
        fileBucket, // Array of document URLs
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
        documents: [],
        policyHolder: '',
        aadharNo: '',
        address: ''
      });
      setComplaintTypes([]);
      setPolicyTypes([]);
      
      // Reset file input
      const fileInput = document.getElementById('documents');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  // CSS classes
  const inputClasses = "text-body-color border-[f0f0f0] w-full rounded-lg border py-3 px-4 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white/90 backdrop-blur-sm";
  const selectClasses = "select appearance-none text-gray-600 text-base font-normal bg-white/90 backdrop-blur-sm border-coolGray-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 w-full rounded-lg border py-3 px-4 outline-none transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <>
      <Navbar/>
      <div 
        className="bg-cover min-h-[300px] lg:min-h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative" 
        style={{backgroundImage: "url('/images/contactbanner.png')", objectFit: "cover"}}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white relative z-0 mx-auto font-bold font-lora tracking-wider text-center">
            Register Complaint
          </h3>
          <nav className="bg-gray-200/20 rounded-full px-4 sm:px-6 mt-4 z-0 py-2 w-full max-w-md">
            <ol className="flex text-center justify-center">
              <li>
                <a className="text-white text-sm sm:text-base" href="/">Home</a>
              </li>
              <li>
                <span className="mx-2 text-white font-semibold">&gt;</span>
              </li>
              <li>
                <span className="text-white font-semibold text-sm sm:text-base">Register Complaint</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="min-h-screen p-4 sm:p-6 md:p-10 relative bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="px-4 relative z-[5] py-4 md:py-2 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
              {/* Content Section */}
              <div className="w-full lg:w-[40%] text-white order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Register Your Insurance Complaint
                </h1>
                <p className="text-base sm:text-lg mb-8 text-gray-300 leading-relaxed">
                  We understand your concerns. Our expert team is here to help resolve your insurance-related issues quickly and efficiently.
                </p>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-4 sm:gap-6 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Assistance</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Our team of insurance experts will guide you through the entire complaint resolution process.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-6 bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">Quick Resolution</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">We strive to resolve your complaints in the shortest possible time frame.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="w-full lg:w-[55%] order-1 lg:order-2">
                <div className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                        <input 
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Email Address *</label>
                        <input 
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                        <input 
                          id="phone"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={inputClasses}
                          required
                          pattern="[0-9]{10}"
                        />
                      </div>
                      <div>
                        <label htmlFor="policyHolder" className={labelClasses}>Policy Holder Name *</label>
                        <input 
                          id="policyHolder"
                          type="text"
                          placeholder="Enter policy holder name"
                          value={formData.policyHolder}
                          onChange={handleInputChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="aadharNo" className={labelClasses}>Aadhar Number *</label>
                      <input 
                        id="aadharNo"
                        type="text"
                        placeholder="12-digit Aadhar number"
                        value={formData.aadharNo}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                        pattern="[0-9]{12}"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className={labelClasses}>Full Address *</label>
                      <textarea 
                        id="address"
                        rows="2"
                        placeholder="Enter your complete address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={inputClasses}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="insuranceType" className={labelClasses}>Insurance Type *</label>
                        <select 
                          id="insuranceType"
                          className={selectClasses}
                          onChange={handleInputChange}
                          value={formData.insuranceType}
                          required
                        >
                          <option value="">Select insurance type</option>
                          {Object.keys(insuranceOptions).map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {formData.insuranceType === 'General Insurance' && (
                        <div>
                          <label htmlFor="policyType" className={labelClasses}>Policy Type *</label>
                          <select 
                            id="policyType"
                            className={selectClasses}
                            onChange={handleInputChange}
                            value={formData.policyType}
                            required
                          >
                            <option value="">Select policy type</option>
                            {policyTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    {formData.insuranceType && (
                      <div>
                        <label htmlFor="complaintType" className={labelClasses}>Complaint Type *</label>
                        <select 
                          id="complaintType"
                          className={selectClasses}
                          onChange={handleInputChange}
                          value={formData.complaintType}
                          required
                        >
                          <option value="">Select complaint type</option>
                          {complaintTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div>
                      <label htmlFor="message" className={labelClasses}>Complaint Details</label>
                      <textarea 
                        id="message"
                        rows="4"
                        placeholder="Please describe your complaint in detail"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label htmlFor="documents" className={labelClasses}>Supporting Documents</label>
                      <input
                        id="documents"
                        type="file"
                        onChange={handleInputChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        multiple
                      />
                      <p className="mt-1 text-xs sm:text-sm text-gray-500">Optional: Upload relevant documents (Max 5MB each - PDF, DOC, Images)</p>
                      
                      {/* Display selected files */}
                      {formData.documents.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {formData.documents.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm text-gray-600 truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {error && (
                      <div className="p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                        <p className="text-sm sm:text-base font-medium">{error}</p>
                      </div>
                    )}
                    
                    {success && (
                      <div className="p-3 sm:p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                        <p className="text-sm sm:text-base font-medium">{success}</p>
                      </div>
                    )}
                    
                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : 'Submit Your Complaint'}
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
