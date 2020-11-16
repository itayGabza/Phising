import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4040",
  headers: {
    "Content-type": "application/json"
  }
});