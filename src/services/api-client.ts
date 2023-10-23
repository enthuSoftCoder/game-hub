import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6e567f473f1b43609d1eaa76015fd762",
  },
});
