import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 300px;
  height: 40px;
  margin: 10px;
  padding-left: 15px;
`;

export const Title = styled.span`
  font-size: 36px;
  margin-top: 10px;
`;
export const Text = styled.span`
  font-size: 16px;
  margin-top: 10px;
`;

export const View = styled.div`
  flex-direction: row;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  font-size: 16px;
  width: 120px;
  height: 40px;
  margin: 10px;
`;
export const MicroButton = styled.button`
  font-size: 16px;
  width: 80px;
  height: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: blue;
  color: white;
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: 22% 22% 10% 10% 10% 22%;
  grid-gap: 10px;
`;
