import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
// export const fetchFromAPI = async () => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: { maxResults: "2" },
//       headers: {
//         "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
//         "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
//       },
//     });

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("API Fetch Error:", error.message);
//     return null;
//   }
// };
