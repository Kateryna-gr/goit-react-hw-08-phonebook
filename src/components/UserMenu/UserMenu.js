import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/useAuthHook';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Username = styled.p`
  font-weight: 700;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Hello, {user.email}</Username>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
