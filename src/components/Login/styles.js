import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55vw;
  height: 250px;
  background-color: rgb(0, 5, 168);
  border-radius: 8px;
  padding: 2rem;
  margin: 100px auto;
  @media only screen and (min-width: 600px) {
    max-width: 350px;
    margin: 180px auto;
  }
`;
