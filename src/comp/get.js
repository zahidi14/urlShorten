import axios from "axios";

export const get = async (url) => {
  const c = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
  return c;
};
