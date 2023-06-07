import React, { useState } from 'react';
import Notiflix from 'notiflix';
import css from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export function FormHandler() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    const form = e.target;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    const existingName = contacts.find(({ name }) => name === formName);
    const existingNumber = contacts.find(({ number }) => number === formNumber);

    if (existingName) {
      reset();
      return Notiflix.Notify.failure(`${formName} is already in contacts`);
    } else if (existingNumber) {
      reset();
      return Notiflix.Notify.failure(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name, number, id: nanoid() }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSumbit} className={css.form}>
      <ul className={css.list}>
        <li className={css.item}>
          <label>
            Name:
            <input
              value={name}
              onChange={onChangeHandler}
              name="name"
              type="text"
            ></input>
          </label>
        </li>
        <li className={css.item}>
          <label>
            Number:
            <input
              value={number}
              name="number"
              onChange={onChangeHandler}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></input>
          </label>
        </li>
      </ul>
      <button className={css.btn} type="submit">
        Add to Contacts
      </button>
    </form>
  );
}

export default FormHandler;
