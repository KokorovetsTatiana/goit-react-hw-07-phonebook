import { Toaster } from "react-hot-toast";
import Container from "./Container";
import Form from "./Form";
import Filter from "./Filter/Filter.jsx";
import ContactsList from "./ContactList/ContactList.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../redux/selectors";

export default function App() {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container title="My phonebook">
      <Toaster autoClose={4000} position="top-right" />
      <Form />
      <h2>
        Contacts
      </h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}