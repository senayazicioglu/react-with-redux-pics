import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XNUDC7Hc60qUO3EAs6eZwWDl7NkHU-5VLoSGE_eRtts",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
