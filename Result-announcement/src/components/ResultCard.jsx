import React from "react";

const ResultCard = ({ result }) => {
  if (!result) {
    return (
      <div className="p-6 text-center text-gray-600">
        No result found. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{result.studentName}</h2>
        <p className="text-gray-700 mb-1">Roll No: {result.rollNo}</p>
        <p className="text-gray-700 mb-1">Father's Name: {result.fatherName}</p>
        <p className="text-gray-700 mb-1">Exam: {result.examName}</p>
        <p className="text-gray-700 mb-1">Board: {result.examBoard}</p>
        <p className="text-gray-700 mb-1">Year: {result.examYear}</p>
        <p className="text-gray-700 mb-1">Result Date: {result.resultDate}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Subjects</h3>
          <table className="w-full mt-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Marks</th>
                <th className="border px-4 py-2">Max Marks</th>
                <th className="border px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(result.subjects) &&
                result.subjects.map((subj, idx) => (
                  <tr key={idx}>
                    <td className="border px-4 py-2">{subj.name}</td>
                    <td className="border px-4 py-2">{subj.marks}</td>
                    <td className="border px-4 py-2">{subj.maxMarks}</td>
                    <td className="border px-4 py-2">{subj.grade}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold">
            Overall Grade: {result.overallGrade}
          </p>
          <p className="text-lg font-bold">Percentage: {result.percentage}%</p>
          <p
            className={`text-lg font-bold ${
              result.status === "PASS" ? "text-green-600" : "text-red-600"
            }`}
          >
            Status: {result.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
