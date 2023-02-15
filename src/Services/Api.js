const baseUrl = "https://fakestoreapi.com/";
const axios = require("axios");

export const AxiosFunction = async (method,url) => {
  const ApiUrl = baseUrl + url;
  const response = await axios({
    method: method,
    url: ApiUrl,
  });
  return response.data;
};
