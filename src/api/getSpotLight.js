import axios from "axios";

const getSpotLights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const response = await axios.get(`${baseUrl}/spotlights`);
  return response.data;
};

export default getSpotLights;
