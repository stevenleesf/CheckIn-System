/* eslint-disable import/no-anonymous-default-export */
import http from "../http-common";

const getAll = () => {
  return http.get("/list");
};

const getOne = id => {
  return http.get(`/bylocation/${id}`);
};

const create = data => {
  return http.post("/customers", data);
};

const createcheckin =(id, data) => {
  return http.post(`/createcheckin/${id}`, data);
};


export default {
  getAll,
  getOne,
  create,
  createcheckin,
 
};