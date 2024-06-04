export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filteredList = studentsList.filter((ele) => ele.location === city);
  return filteredList.map((ele) => {
    const stdGrade = newGrades.find((grade) => grade.studentId === ele.id);
    return {
      ...ele,
      grade: stdGrade ? stdGrade.grade : 'N/A',

    };
  });
}
