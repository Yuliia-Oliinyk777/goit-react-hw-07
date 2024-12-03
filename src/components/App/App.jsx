import style from './App.module.css';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const App = () => {
  return (
    <Section>
      <h1 className={style.mainHeader}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </Section>
  );
};

export default App;
