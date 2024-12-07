import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <>
      {filteredContacts.length > 0 && !error && !loading ? (
        <ul className={style.list}>
          {filteredContacts.map(contact => (
            <li className={style.listItem} key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                phone={contact.number}
              />
            </li>
          ))}
        </ul>
      ) : (
        !error &&
        !loading && <p className={style.message}>Сontacts not found</p>
      )}
    </>
  );
};

export default ContactList;
