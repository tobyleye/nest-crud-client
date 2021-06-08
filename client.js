import axios from "axios";

const client = axios.create({
  baseURL: "https://three-little-birds.herokuapp.com",
});

export default client;
