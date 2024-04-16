export default function appendToEachArrayValue(arr, appendString) {
  const newArray = [];
  for (const element of arr) {
    newArray.push(`${element}-${appendString}`.slice(0, -1));
  }
  return newArray;
}
