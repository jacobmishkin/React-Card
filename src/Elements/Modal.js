import React, {Component} from 'react';
import styled from 'styled-components';
import {Transition, animated} from 'react-spring';

import {Portal, absolute, relative} from 'Utils';
import {Card} from './Cards';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const {children, on, toggle} = this.props;
    return (
      <Portal>
      <Transition
        native
        config={{
          tension: 280,
          friction: 60
        }}
        from={{opacity: 0, bgOpacity: 0, y: -50}}
        enter={{opacity: 1, bgOpacity: 0.5, y: 0}}
        leave={{opacity: 0, bgOpacity: 0, y: 50}}
      >
        {on &&
        (styles => (
          <ModalWrapper style={{ ...styles }}>
            <ModalCard style={{
              transform: styles.y.interpolate(
                y => `translate3d(0, ${y}px, 0)`,
              ),
              ...styles
            }}>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background
            style={{ opacity: styles.bgOpacity.interpolate(
              bgOpacity => bgOpacity
              )
            }}
            onClick={toggle} />
          </ModalWrapper>
        ))}
        </Transition>
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

const AnimCard = Card.withComponent(animated.div)

const ModalCard = AnimCard.extend`
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

const Background = styled(animated.div)`
  ${absolute({})} width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
