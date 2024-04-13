export default function handleResponseFromAPI(promise) {
  const newPromise = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject(new Error());
    }
  });
  newPromise.then(() => console.log('Got a response from the API'));
}
