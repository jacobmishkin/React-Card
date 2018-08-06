import styled from 'styled-components';
import { elevation, transition, black, lightGray } from 'Utils';

 export const Card = styled.div`
  box-sizing: border-box;
  background: ${lightGray};
  color: ${black};
  border-radius: 5px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
  ${elevation[4]};
  ${transition({
    ease: 'ease-in',
  })};
  &:hover {
    ${elevation[5]};
  }
`;
