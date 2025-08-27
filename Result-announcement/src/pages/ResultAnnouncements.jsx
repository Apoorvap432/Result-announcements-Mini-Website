import React, { useState } from "react";
import { fetchResultByRollNo, mockResultsData } from "../api/mockResults";
import SearchForm from "../components/SearchForm";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import ResultCard from "../components/ResultCard";
import Instructions from "../components/Instructions";

const ResultAnnouncements = () => {
  const [rollNo, setRollNo] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!rollNo.trim()) {
      setError("Please enter a roll number");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const resultData = await fetchResultByRollNo(rollNo.trim());
      setResult(resultData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Result Announcements</h1>
          <p className="text-gray-600">Enter your roll number to view exam results</p>
        </div>

        {/* Search Form */}
        <SearchForm
          rollNo={rollNo}
          setRollNo={setRollNo}
          handleSubmit={handleSubmit}
          loading={loading}
          mockResults={Object.keys(mockResultsData)}
        />

        {/* States */}
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        {result && <ResultCard result={result} />}
        {!result && !loading && !error && <Instructions />}

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Result Announcements System | Built with React.js</p>
        </footer>
      </div>
    </div>
  );
};

export default ResultAnnouncements;
