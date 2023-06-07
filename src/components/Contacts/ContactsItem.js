import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsItem = () => {
  const dispatch = useDispatch();
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
      {getVisibleContacts?.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact({ id }))} type="button">
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactsItem;
