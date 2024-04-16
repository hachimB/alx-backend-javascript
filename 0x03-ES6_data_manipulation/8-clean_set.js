export default function cleanSet(set, startString) {
  if (!set || !startString || startString.length === 0) {
    return '';
  }

  let result = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      result += `${element.replace(startString, '')}-`;
    }
  }
  return result.slice(0, -1);
}
