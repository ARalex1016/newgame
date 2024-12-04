import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_NODE_ENV === "development"
      ? "http://localhost:5000/api/v1"
      : "/api/v1",
  withCredentials: true,
});
