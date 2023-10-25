import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e753593b00ba43d28ede2be1d13f317e",
  },
});
