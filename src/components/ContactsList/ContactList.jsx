import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './ContactItem';
import {
  selectIsLoading,
  selectError,
  selectCurrentContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentContacts = useSelector(selectCurrentContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h5>Loading...</h5>}
      {error && <h5>Error...</h5>}
      {currentContacts.length > 0 ? (
        <ul>
          {currentContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                phone={contact.number}
                id={contact.id}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h5>No contacts</h5>
      )}
    </div>
  );
};
