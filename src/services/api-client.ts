import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fab26ad83f0a49739676a272df34f826",
  },
});
