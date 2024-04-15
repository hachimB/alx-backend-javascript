export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Views = new Int8Array(buffer);
  try {
    int8Views[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }
  return buffer;
}
