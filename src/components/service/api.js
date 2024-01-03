import axios from "axios";

const getFact = async () => {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data.fact;
};

const api = {
  getFact,
};

export default api;
