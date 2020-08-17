import axios from "axios";

const intance = axios.create({
  baseURL: "https://letcook-276be.firebaseio.com/",
});

export default intance;
