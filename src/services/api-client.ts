import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b338f324c834ceda334d195d15aa06d",
  },
});
