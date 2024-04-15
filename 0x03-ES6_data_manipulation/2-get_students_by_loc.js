export default function getStudentsByLocation(arr, location) {
  if (Array.isArray(arr) === false || !location) {
    return [];
  }
  return arr.filter((loc) => loc.location === location);
}
