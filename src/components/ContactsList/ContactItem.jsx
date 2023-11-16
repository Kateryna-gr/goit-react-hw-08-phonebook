import { useDispatch } from 'react-redux';
import { ButtonDelete } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <div>
      {id} - {name} - {phone}{' '}
      <ButtonDelete onClick={() => handleDeleteContact(id)}>
        Delete
      </ButtonDelete>
    </div>
  );
};
