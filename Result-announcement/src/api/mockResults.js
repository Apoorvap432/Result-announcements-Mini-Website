// Mock Results Database
const mockResultsData = {
  "2024001": {
    rollNo: "2024001",
    studentName: "Arjun Kumar",
    fatherName: "Rajesh Kumar",
    examName: "Class 12th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-15",
    overallGrade: "A+",
    percentage: 92.4,
    status: "PASS",
    subjects: [
      { name: "Mathematics", marks: 95, maxMarks: 100, grade: "A+" },
      { name: "Physics", marks: 89, maxMarks: 100, grade: "A" },
      { name: "Chemistry", marks: 94, maxMarks: 100, grade: "A+" },
      { name: "English", marks: 88, maxMarks: 100, grade: "A" },
      { name: "Computer Science", marks: 96, maxMarks: 100, grade: "A+" }
    ]
  },
  "2024002": {
    rollNo: "2024002",
    studentName: "Priya Sharma",
    fatherName: "Suresh Sharma",
    examName: "Class 12th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-15",
    overallGrade: "B+",
    percentage: 78.6,
    status: "PASS",
    subjects: [
      { name: "Mathematics", marks: 75, maxMarks: 100, grade: "B" },
      { name: "Physics", marks: 82, maxMarks: 100, grade: "A" },
      { name: "Chemistry", marks: 79, maxMarks: 100, grade: "B+" },
      { name: "English", marks: 81, maxMarks: 100, grade: "A" },
      { name: "Biology", marks: 76, maxMarks: 100, grade: "B" }
    ]
  },
  "2024003": {
    rollNo: "2024003",
    studentName: "Rohit Verma",
    fatherName: "Amit Verma",
    examName: "Class 10th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-20",
    overallGrade: "A",
    percentage: 85.2,
    status: "PASS",
    subjects: [
      { name: "Mathematics", marks: 88, maxMarks: 100, grade: "A" },
      { name: "Science", marks: 84, maxMarks: 100, grade: "A" },
      { name: "English", marks: 82, maxMarks: 100, grade: "A" },
      { name: "Hindi", marks: 87, maxMarks: 100, grade: "A" },
      { name: "Social Science", marks: 85, maxMarks: 100, grade: "A" }
    ]
  },
  "2024004": {
    rollNo: "2024004",
    studentName: "Sneha Patel",
    fatherName: "Kishore Patel",
    examName: "Class 12th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-15",
    overallGrade: "C+",
    percentage: 58.4,
    status: "PASS",
    subjects: [
      { name: "Mathematics", marks: 55, maxMarks: 100, grade: "C" },
      { name: "Physics", marks: 62, maxMarks: 100, grade: "B" },
      { name: "Chemistry", marks: 58, maxMarks: 100, grade: "C+" },
      { name: "English", marks: 60, maxMarks: 100, grade: "B" },
      { name: "Biology", marks: 57, maxMarks: 100, grade: "C+" }
    ]
  },
  "2024005": {
    rollNo: "2024005",
    studentName: "Ananya Singh",
    fatherName: "Deepak Singh",
    examName: "Class 10th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-20",
    overallGrade: "B",
    percentage: 72.5,
    status: "PASS",
    subjects: [
      { name: "Mathematics", marks: 70, maxMarks: 100, grade: "B" },
      { name: "Science", marks: 74, maxMarks: 100, grade: "B+" },
      { name: "English", marks: 71, maxMarks: 100, grade: "B" },
      { name: "Hindi", marks: 73, maxMarks: 100, grade: "B+" },
      { name: "Social Science", marks: 74, maxMarks: 100, grade: "B+" }
    ]
  },
  "2024006": {
    rollNo: "2024006",
    studentName: "Rahul Mehta",
    fatherName: "Sanjay Mehta",
    examName: "Class 12th Board Examination",
    examBoard: "CBSE",
    examYear: "2024",
    resultDate: "2024-05-15",
    overallGrade: "D",
    percentage: 42.3,
    status: "FAIL",
    subjects: [
      { name: "Mathematics", marks: 30, maxMarks: 100, grade: "F" },
      { name: "Physics", marks: 45, maxMarks: 100, grade: "D" },
      { name: "Chemistry", marks: 42, maxMarks: 100, grade: "D" },
      { name: "English", marks: 50, maxMarks: 100, grade: "C" },
      { name: "Biology", marks: 44, maxMarks: 100, grade: "D" }
    ]
  }
};

export default mockResultsData;

// Mock API function
export const fetchResultByRollNo = async (rollNo) => {
  await new Promise(resolve => setTimeout(resolve, 1500)); // simulate delay
  if (mockResultsData[rollNo]) return mockResultsData[rollNo];
  throw new Error("Result not found for this roll number");
};
