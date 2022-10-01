import styled from "styled-components";

export const Button = styled.button`
  width: 70%;
  height: 50px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: black;
  background: white;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 30px;
  margin-top: 60px;

  p {
    color: black;
    font-weight: bold;
    font-size: 15px;
    
  }
`;

export const LastButton = styled.div`
  width: 80%;
  height: 7%;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 90%;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  color: ${(props) => {
    if (props.status === "green") return "green";
    if (props.status === "red") return "red";
    if (props.status === "orange") return "orange";
  }};
  background-color: #ffffd4;
  border-radius: 5px;
  padding: 30px;
  margin-top: 5%;

  variant: {
    correto: {
      color: green !important;
    }
  }
  

`;
