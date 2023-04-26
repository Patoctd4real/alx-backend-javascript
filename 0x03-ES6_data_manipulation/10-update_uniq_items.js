export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) throw Error('Cannot process');
  const result = items;
  for (const [p, z] of items.entries()) if (z === 1) result.set(p, 100);
  return result;
}
