import React, {Component} from 'react';
import styled from 'styled-components';

import {Portal, absolute, relative} from 'Utils';
import {Card} from './Cards';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const {children, on, toggle} = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  ${relative()}
  z-index: 10;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({
    y: 'top',
    x: 'right',
  })};
  border: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
`;

const Background = styled.div`
  ${absolute({})} width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
