export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const response = "response"; 
    if (response) {
      resolve(response);
    } else {
      reject("Error:");
    }
  });
}
