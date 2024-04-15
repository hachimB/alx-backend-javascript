export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Views = new Int8Array(buffer);
  int8Views[position] = value;
  return buffer;
}
