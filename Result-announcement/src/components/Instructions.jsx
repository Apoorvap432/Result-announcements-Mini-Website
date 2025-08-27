import React from "react";
import { AlertCircle } from "lucide-react";

const Instructions = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="text-center">
      <AlertCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-800 mb-2">How to Check Results</h3>
      <div className="text-gray-600 space-y-2">
        <p>1. Enter your roll number in the search box above</p>
        <p>2. Click the search button or press Enter</p>
        <p>3. Your result will be displayed with detailed marks</p>
      </div>
    </div>
  </div>
);

export default Instructions;
