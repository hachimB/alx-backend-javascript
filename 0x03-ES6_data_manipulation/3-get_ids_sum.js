export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const initialValue = 0;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
}
