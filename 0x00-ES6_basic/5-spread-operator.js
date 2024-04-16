export default function concatArrays(array1, array2, string) {
  const array3 = string.split('');
  const concat = [...array1, ...array2, ...array3];
  return concat;
}
