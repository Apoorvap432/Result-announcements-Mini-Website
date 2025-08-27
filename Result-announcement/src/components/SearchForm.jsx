import React from "react";
import { Search } from "lucide-react";

const SearchForm = ({ rollNo, setRollNo, handleSubmit, loading, mockResults }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
    <div className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          placeholder="Enter Roll Number (e.g., 2024001)"
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Sample roll numbers */}
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-500 mb-2">Try these sample roll numbers from 2021001-2024006:</p>
      <div className="flex flex-wrap justify-center gap-2">
{(mockResults || []).map((sampleRoll) => (
  <button
    key={sampleRoll}
    onClick={() => setRollNo(sampleRoll)}
    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
  >
    {sampleRoll}
  </button>
))}

      </div>
    </div>
  </div>
);

export default SearchForm;
