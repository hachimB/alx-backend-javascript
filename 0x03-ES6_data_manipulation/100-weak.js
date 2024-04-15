// export const weakMap = new WeakMap();
// export function queryAPI(endpoint) {
//   let count = weakMap.get(endpoint);
//   if (count === undefined) {
//     count = 0;
//   }
//   if (count >= 5) {
//     throw new Error('Endpoint load is high');
//   }
//   count += 1;
//   weakMap.set(endpoint, count);
// }
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  let count = 0;
  if (weakMap.has(endpoint)) {
    count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }

  weakMap.set(endpoint, ++count);
}

