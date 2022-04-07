import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppDispatch } from '../../../app/hooks';
import { mobileDataSelector } from '../../../app/selector';
import { data } from '../../data';
import { Row } from './Row';
import { actions } from '../slice/mobileDataSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 400px;
  height: 300px;
  margin: auto;
  border: 1px solid;
  top: calc(50vh - 150px);
  left: calc(50vw - 200px);
`;

const Header = styled.div`
  height: 10%;
  display: flex;
  padding: 5px;
  background-color: lightblue;
  align-items: center;
  h1 {
    flex: 1;
    font-size: 20px;
    text-align: center;
    margin: 0;
    color: #fff;
  }
`;

const SecondHeader = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: darkgray;
  color: #fff;
  .platform {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: 1px solid #fff;
    > div {
      cursor: pointer;
      padding: 5px;
      &.active {
        color: darkgray;
        background-color: #fff;
      }
    }
  }
  .hide-btn {
    cursor: pointer;
    padding: 5px;
  }
`;

const Content = styled.div`
  height: 70%;
  flex: 1;
  h2 {
    color: lightgray;
    height: 10%;
    margin: 0 0 0 5px;
    font-size: 16px;
    line-height: 30px;
  }
  .table {
    font-size: 14px;
    overflow: auto;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    > div {
      min-height: 25px;
      &:last-child {
        margin-bottom: 10px;
      }
    }
    .th {
      margin: 0 5px 0 5px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
      align-items: flex-end;
    }
  }
`;

const Footer = styled.div`
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: darkgray;
`;

const platforms = ['ALL', 'Twitter', 'FB', 'IG', 'Youtube'];

export const Card = () => {
  const [platform, setPlatform] = useState('ALL');
  const [show, setShow] = useState(true);
  const dispatch = useAppDispatch();
  const mobileData = useSelector(mobileDataSelector);

  useEffect(() => {
    dispatch(actions.set(data));
  }, []);

  return (
    <Container>
      <Header>
        <h1>CARD</h1>
        <span>?</span>
      </Header>
      {show && (
        <SecondHeader>
          <div className="platform">
            {platforms.map(p => (
              <div
                key={p}
                className={platform === p ? 'active' : ''}
                onClick={() => setPlatform(p)}
              >
                {p}
              </div>
            ))}
          </div>
          <div className="hide-btn" onClick={() => setShow(false)}>
            HIDE
          </div>
        </SecondHeader>
      )}
      <Content>
        {platform === 'ALL' && (
          <>
            <h2>TOP TERMS</h2>
            <div className="table">
              <div className="th">
                <span>TERMS</span>
                <span>% OF TOTAL POSTS</span>
                <span># OF POSTS</span>
              </div>
              {mobileData.map(d => (
                <Row key={d.name} name={d.name} count={d.count} />
              ))}
            </div>
          </>
        )}
      </Content>
      <Footer>FOOTER</Footer>
    </Container>
  );
};
