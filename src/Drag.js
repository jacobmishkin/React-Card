import React, { Component } from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card, } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  position: absolute;
  width: 320px;
  height: 300px;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  background: #ccc;
  max-width: 350px;
  height: 330px;
  margin: 0 auto;
  border-radius: 5px;
`;
export default class Drag extends Component {

  onUp = xDelta => () => {
    if(xDelta < -250) {
      alert('remove card');
    } else if(xDelta > 250) {
      alert('accept card');
    }
  }

  render() {
    return (
      <Gesture>
        {({down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === 'x'}
          >
          {({ x }) => (
           <CardContainer style={{
              background: x.interpolate({
                  range: [-300, 300],
                  output: ['#ff1C68', '#14D790'],
                  extrapolate: 'clamp'
                })
            }}>
              <DragCard
              onMouseUp={this.onUp(xDelta)}
              onTouchEnd={this.onUp(xDelta)}
              style={{
                opacity: x.interpolate({
                    range: [-300, -100],
                    output: [0, 1],
                    extrapolate: 'clamp'
                  }),
                transform: interpolate(
                  [x,
                    x.interpolate({
                    range: [-300, 300],
                    output: [-45, 45],
                    extrapolate: 'clamp'
                  })
                  ],
                  (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                )
              }}>
                <h1>Drag</h1>
              </DragCard>
            </CardContainer>
          )}
          </Spring>
        )}
      </Gesture>
    )
  }
}
