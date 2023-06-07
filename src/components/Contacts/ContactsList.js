import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';
import { getContacts, getFilter } from 'redux/selectors';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const searchVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const getVisibleContacts = searchVisibleContacts();

  return (
    <>
      <ul className={css.list}>
        {getVisibleContacts?.map(contact => (
          <ContactsItem key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
}
