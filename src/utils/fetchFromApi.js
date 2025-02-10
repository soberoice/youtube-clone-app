import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      params: { maxResults: "2" },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.error("API Fetch Error:", error.message);
    return null;
  }
};
