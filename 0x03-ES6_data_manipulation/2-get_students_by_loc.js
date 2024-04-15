export default function getStudentsByLocation(arr, location) {
  if (!arr || !location) {
    return [];
  }
  return arr.filter((loc) => loc.location === location);
}
