import axios from "axios";
import type { Spotlight } from "@/api/types";


const getSpotLights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const response = await axios.get<Spotlight[]>(`${baseUrl}/spotlights`);
  return response.data;
};

export default getSpotLights;
