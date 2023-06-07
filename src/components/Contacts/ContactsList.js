import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';

export default function Contacts() {
  return (
    <>
      <ul className={css.list}>
        <ContactsItem />
      </ul>
    </>
  );
}
