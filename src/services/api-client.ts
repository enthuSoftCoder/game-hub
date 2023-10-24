import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6b35a794794b4a659fcb3c430e28a744",
  },
});
