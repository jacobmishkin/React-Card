import styled from 'styled-components';
import {elevation, transition, black, lightGray} from 'Utils';

export const Card = styled.div`
  background: ${lightGray};
  color: ${black};
  border-radius: 5px;
  cursor: pointer;
  max-width: 320px;
  padding: 15px;
  margin: 0 auto;
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[5]};
  }
`;
