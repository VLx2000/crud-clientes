import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "http://localhost:8000/index.php",
});

export default axiosInstance;
