import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #fff;
  cursor: pointer;
  padding: 6px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
