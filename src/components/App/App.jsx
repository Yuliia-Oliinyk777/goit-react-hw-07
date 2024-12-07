import style from './App.module.css';
import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/selectors';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <h1 className={style.mainHeader}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </Section>
  );
};

export default App;
