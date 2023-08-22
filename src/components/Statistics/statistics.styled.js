import styled from '@emotion/styled';

export const Ul = styled.ul`
  width: 250px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: white;
  font-weight: bold;
  overflow: hidden;

  li:nth-of-type(2n) {
    background-color: #000;
    color: #fff;
  }
`;

export const Li = styled.li`
  padding: 10px;
`;
