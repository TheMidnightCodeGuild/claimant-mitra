import { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const TrackComplaint = () => {
  const [email, setEmail] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAllLogs, setShowAllLogs] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setComplaintData(null);
    setShowAllLogs(false);

    try {
      const q = query(
        collection(db, 'users'),
        where('email', '==', email.toLowerCase())
      );
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setError('No complaint found with this email address');
        return;
      }

      const doc = querySnapshot.docs[0];
      setComplaintData(doc.data());
    } catch (err) {
      setError('Error fetching complaint data. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toISOString().split('T')[0];
  };

  const renderLogs = (logs) => {
    if (!logs || logs.length === 0) return null;

    const sortedLogs = [...logs].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );

    const logsToShow = showAllLogs ? sortedLogs : [sortedLogs[0]];

    return (
      <div className="space-y-4">
        {logsToShow.map((log, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start">
            <div className="w-full sm:min-w-[100px] text-sm text-gray-500">
              {formatDate(log.date)}
            </div>
            <div className="w-full sm:flex-1 bg-gray-50 p-3 rounded-lg">
              {log.remark}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-700">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Track Your Complaint</h1>
        
        <form onSubmit={handleTrack} className="mb-6 sm:mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-1 px-4 sm:px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1AC0D8] focus:border-transparent text-gray-700 transition duration-200"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#1AC0D8] text-white rounded-xl hover:bg-[#18aec4] transition-all duration-200 disabled:opacity-50 font-medium shadow-md hover:shadow-lg"
            >
              {loading ? 'Checking...' : 'Check Status'}
            </button>
          </div>
        </form>

        {error && (
          <div className="text-red-500 text-center mb-6 p-4 bg-red-50 rounded-lg">{error}</div>
        )}

        {complaintData && (
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Name</h3>
                <p className="text-gray-800 break-words">{complaintData.name || 'N/A'}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
                <p className="text-gray-800 break-words">{complaintData.status || 'N/A'}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Document Status</h3>
                <p className="text-gray-800 break-words">{complaintData.documentShort || 'N/A'}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Case Acceptance Date</h3>
                <p className="text-gray-800">{formatDate(complaintData.caseAcceptanceDate)}</p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Complaint Date</h3>
                <p className="text-gray-800">{formatDate(complaintData.complaintDate)}</p>
              </div>
            </div>

            {complaintData.mainLogs && complaintData.mainLogs.length > 0 && (
              <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Case Timeline</h3>
                  {complaintData.mainLogs.length > 1 && (
                    <button
                      onClick={() => setShowAllLogs(!showAllLogs)}
                      className="text-[#1AC0D8] hover:text-[#18aec4] font-medium transition-colors duration-200"
                    >
                      {showAllLogs ? 'Show Less' : 'View All'}
                    </button>
                  )}
                </div>
                {renderLogs(complaintData.mainLogs)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackComplaint;