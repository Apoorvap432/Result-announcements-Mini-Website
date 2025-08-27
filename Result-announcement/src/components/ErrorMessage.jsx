import React from "react";
import { XCircle } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
    <XCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
    <h3 className="text-lg font-medium text-red-800 mb-2">Result Not Found</h3>
    <p className="text-red-600 mb-4">{message}</p>
    <button 
      onClick={onRetry}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);

export default ErrorMessage;
