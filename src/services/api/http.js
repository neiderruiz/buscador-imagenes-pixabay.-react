const URL_API = process.env.REACT_APP_API_URL;

export const get = async (url) => {
  return await fetch(`${URL_API}${url}`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};
