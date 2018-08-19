import styled from 'styled-components';
import {elevation, transition, black, lightGray} from 'Utils';

export const Card = styled.div`
  box-sizing: border-box;
  background: ${lightGray};
  color: ${black};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  min-width: 320px;
  max-width: 500px;
  ${elevation[4]};
  ${transition({
    property: 'box-shadow',
  })};
  &:hover {
    ${elevation[5]};
  }
`;
