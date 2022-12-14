import styled from "styled-components";

export const Button = styled.button`
  width: 70%;
  height: 50px;
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: ${(props) => props.color || "black"};
  background: white;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 30px;
  margin-top: 60px;
  text-decoration: ${(props) => {
    if (props.grifado === "ok") return "line-through";
  }};
  p {
    margin-bottom: 20px;
  }
`;

export const LastButton = styled.div`
  width: 70%;
  height: fit-content;
  font-family: "Righteous";
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
  margin-top: 5%;
  padding: 20px 0;
  variant: {
    correto: {
      color: green !important;
    }
  }

  p {
    margin-bottom: 5px;
  }
`;
