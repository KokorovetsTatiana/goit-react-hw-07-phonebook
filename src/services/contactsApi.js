import axios from "axios";

axios.defaults.baseURL = "https://61238311124d8800175682bd.mockapi.io";

export const fetchContacts = () => {
  return axios.get("/contacts");
};

export const fetchAddContact = (contact) => {
  return axios.post(`/contacts`, contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`contacts/${id}`);
};