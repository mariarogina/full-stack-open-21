import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};
//add
const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};
//edit
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const removePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const personService = {
  getAll: getAll,
  create: create,
  update: update,
  removePerson: removePerson,
};

export default personService;
