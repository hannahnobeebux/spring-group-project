import styled from "styled-components";

export default function LoggedInUser() {
  return (
    <Section>
      <h2>My account details:</h2>
      <h3>first name</h3>
      <h3>last name</h3>
      <h3>email</h3>
      <h3>password</h3>
      <LogoutBtn>Edit details</LogoutBtn>
      <LogoutBtn>Log out</LogoutBtn>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const LogoutBtn = styled.button`
  align-content: center;
  border-style: none;
  width: 8vw;
  margin-bottom: 1vw;
  padding: 1vw;

  align-self: center;
  color: White;
  border-radius: 20px;
  background-color: #ffa372;

  &:hover {
    background-color: #e07426;
  }
`;
