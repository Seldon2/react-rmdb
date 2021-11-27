import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: var(--fontMed);

  input {
    font-size: var(--fontMed);
    height: 10px;
    margin-right: 7px;
  }

  button {
    font-size: var(--fontMed);
    width: 17.7%;
    border-radius: 30px;
    border: 0;
    cursor: pointer;
    transition: all 0.3;
  }

  button:hover{
    opacity: 0.75;
  }
`;