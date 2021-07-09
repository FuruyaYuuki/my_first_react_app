import styled from 'styled-components';
import { useState } from 'react';
import { Q } from "./Q"
import { QA } from "./QA"

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const MainClass = styled.main`
  height: 400px;
`

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #2196F3;
  padding: 8px 16px;
  min-width: 100px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`

export const Main = () => {

  const [tab, setTab] = useState('Q');

  return (
    <MainClass>
      <Container tab={tab} setTab={setTab}>
        <h4>質問一覧</h4>
        {
          tab === 'Q' ? <Q /> : <QA/>
        }
        <Button onClick={setTab}>回答</Button>
      </Container>
    </MainClass>
  )
}