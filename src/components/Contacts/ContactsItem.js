import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => dispatch(deleteContact({ id }))} type="button">
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactsItem;
