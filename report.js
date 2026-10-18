//רק מציינת שלקח לי הרבה זמן לעשות את התרגיל ובסוף הצלחתי אך בעזרת 
// GEMINI כי קצת נתקעתי... :)
const withStatus = (students) => {
  const newStudents = [];

  for (const student of students) {
    const newStudent = {
      ...student,
      status: student.grade >= 56 ? "pass" : "fail"
    };
    newStudents.push(newStudent);
  }

  return newStudents;
};

export default withStatus;