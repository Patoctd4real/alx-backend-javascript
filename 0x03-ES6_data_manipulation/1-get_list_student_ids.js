export default function getListStudentIds(stdList) {
  if (!Array.isArray(stdList)) return [];
  return stdList.map((alls) => alls.id);
}
