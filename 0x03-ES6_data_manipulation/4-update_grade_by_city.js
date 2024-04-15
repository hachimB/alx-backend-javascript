export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr) === false || !city || !newGrades) {
    return [];
  }
  const students = arr.filter((area) => area.location === city);
  return students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
  });
}
