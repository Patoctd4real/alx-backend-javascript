export default function getStudentIdsSum(stdList) {
  return stdList.reduce((x, y) => x + y.id, 0);
}
