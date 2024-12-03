import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
const ContactList = () => {
  const selectContacts = useSelector(state => state.contacts.items);

  const selectNameFilter = useSelector(state => state.filters.filters.name);

  const filteredContacts = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.length > 0 ? (
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
        <p className={style.message}>Сontacts not found</p>
      )}
    </>
  );
};

export default ContactList;
