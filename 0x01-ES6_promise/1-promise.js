export default function getFullResponseFromAPI(success) {
  return new Promise(async (resolve, reject) => {
    try {
      if (success) {
        const response = {
          status: 200,
          body: 'Success',
        };
        resolve(response);
      } else {
        throw new Error('The fake API is not working currently');
      }
    } catch (error) {
      reject(error);
    }
  });
}
