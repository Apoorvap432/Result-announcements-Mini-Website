import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ResultCard from "./components/ResultCard";
import mockResultsData from "./api/mockResults";

function App() {
  const [rollNo, setRollNo] = useState("");   // <-- define state
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API lookup
    setTimeout(() => {
      const found = mockResultsData[rollNo];
      setResult(found || null);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Student Result Portal
      </h1>

      <SearchForm
        rollNo={rollNo}
        setRollNo={setRollNo}
        handleSubmit={handleSubmit}
        loading={loading}
        mockResults={Object.keys(mockResultsData)} // Pass array of roll numbers
      />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
