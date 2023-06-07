import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contactsSlice';
export default function Filter() {
  const dispatch = useDispatch();
  const handlerFilter = event => {
    dispatch(getVisibleContacts(event.currentTarget.value));
  };

  return (
    <form className={css.form}>
      <label className={css.find}>
        Find by name
        <input onChange={handlerFilter} type="text"></input>
      </label>
    </form>
  );
}
