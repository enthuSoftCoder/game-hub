import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1113d9264e1645e480b80fa1edc2f6f7",
  },
});
