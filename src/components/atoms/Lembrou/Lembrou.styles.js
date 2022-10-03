import styled from "styled-components";

export const Button = styled.button`
  width: 55px;
  height: 30px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  p {
    color: white;
    font-weight: 700;
    font-size: 10px;
  }
`;
