import styled from "styled-components";

export const StyleInput = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  border-radius: 8px;
  border: solid 1px black;
  background-color: aliceblue;

  input {
    border: none;
    background-color: aliceblue;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
