import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9a7bf033f9fd497aa5dabf28eadf1dad",
  },
});
