import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [search, setSearch] = useState("");

  // Функція для додавання нового контакту
  const handleAddContact = (name, number) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: `id-${Date.now()}`, name, number },
    ]);
  };

  // Функція для видалення контакту
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>📖 Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
