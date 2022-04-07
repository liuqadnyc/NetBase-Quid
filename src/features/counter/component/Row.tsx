import React from 'react';
import styled from 'styled-components';

type RowProps = {
  name: string;
  count: number;
};

const Container = styled.div`
  display: flex;
  margin: 10px 5px 0 5px;
  justify-content: space-between;
  .name {
    flex: 2;
    font-weight: bold;
  }
  .bar {
    flex: 3;
    background: grey;
    position: relative;
    display: flex;
    .color-bar {
      background-color: yellow;
      width: ${({ theme }) => `${theme}%`};
    }
    .bar-percentage {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
  .percentage {
    text-align: end;
    flex: 2;
  }
`;

export const Row = ({ name, count }: RowProps) => {
  return (
    <Container theme={count}>
      <div className="name">{name}</div>
      <div className="bar">
        <div className="color-bar"></div>
        <div className="bar-percentage">{`${count}%`}</div>
      </div>
      <div className="percentage">{count}</div>
    </Container>
  );
};
