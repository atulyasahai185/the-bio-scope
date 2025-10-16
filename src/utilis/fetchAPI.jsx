export const movie_API = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_movie_APIKey,
  },
};

export const GenAI_APIKey = import.meta.env.VITE_GenAI_APIKey;
