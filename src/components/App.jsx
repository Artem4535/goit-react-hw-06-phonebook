import React from 'react';
import FormHandler from './PhoneBook/PhoneBook';
import Contacts from './Contacts/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export function App() {
  return (
    <>
      <Section>
        <FormHandler />
      </Section>

      <Section>
        <Filter />
        <Contacts title={'Contacts'} />
      </Section>
    </>
  );
}
