import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8cb7d17acd246318cd229d86857b7a3",
  },
});
