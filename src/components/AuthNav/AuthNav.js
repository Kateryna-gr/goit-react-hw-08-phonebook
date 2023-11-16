import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  .active {
    color: #e84a5f;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <LinkNav to="/register">Register</LinkNav>
      <LinkNav to="/login">Log In</LinkNav>
    </div>
  );
};
