import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAllProblems = async () => {
  const response = await API.get("/problems");
  return response.data;
};

export const getProblemById = async (id) => {
  const response = await API.get(`/problems/${id}`);
  return response.data;
};