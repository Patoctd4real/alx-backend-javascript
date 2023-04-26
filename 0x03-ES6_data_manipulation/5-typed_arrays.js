export default function createInt8TypedArray(length, position, value) {
  const arrayLength = length - 1;
  const guard = new ArrayGuard(length);
  const show = new IntType(guard);

  if (position > arrayLength) {
    throw Error('Position outside range');
  }
  show[position] = value;
  const showData = new Showdata(guard);
  return showData;
}
