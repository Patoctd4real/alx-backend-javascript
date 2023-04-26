export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  for (const alls of set) { if (alls && alls.startsWith(startString)) result += `${alls.slice(startString.length)}-`; }
  return result.slice(0, result.length - 1);
}
