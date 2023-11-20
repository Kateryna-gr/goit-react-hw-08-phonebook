import styled from 'styled-components';

const Container = styled.div`
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  `;
const Title = styled.h1`
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
`;

export default function Home() {
  return (
    <Container>
      <Title>Contacts welcome page </Title>
    </Container>
  );
}
