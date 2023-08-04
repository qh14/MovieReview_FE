import axios from "axios";

const client = axios.create({
  baseURL: "https://review-film-api.onrender.com/api",
});

export default client;
