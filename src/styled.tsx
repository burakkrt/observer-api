import styled from "styled-components";

export const Container = styled.div`

  color: red;
`;

export const Button = styled.button<{ $primary?: boolean }>`

  background-color: ${props => props.$primary ? "#123122" : "#412123"};
  font-size: 24px;
`;