export default function getStudentsByLocation(stdList, city) {
  return stdList.filter((alls) => alls.location === city);
}
