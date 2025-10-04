import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // must match the .env variable
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default api;
