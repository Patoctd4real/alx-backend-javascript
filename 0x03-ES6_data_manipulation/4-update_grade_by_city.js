export default function updateStudentGradeByCity(stdList, city, newGrades) {
  return stdList
    .filter((alls) => alls.location === city)
    .map((student) => {
      const scores = newGrades.filter((el) => alls.studentId === student.id);
      const score = scores.length ? scores[0].score	  : 'N/A';
      return {
        ...student,
        score,
      };
    });
}
