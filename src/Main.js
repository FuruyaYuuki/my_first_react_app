import styled from 'styled-components';
import { useState } from 'react';
import { Q } from "./Q"
import { QA } from "./QA"
import { Button } from "./Button"

const MainClass = styled.main`
  height: 795px;
`

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const ListName = styled.h1`
  color: black;
  font-size: 40px;
`

export const Main = () => {

  const [tab, setTab] = useState('Q');

  return (
    <MainClass>
      <Container tab={tab} setTab={setTab}>
        <ListName>質問一覧</ListName>
        {
          tab === 'Q' ? <Q /> : <QA/>
        }
        <Button onClick={setTab}>回答</Button>
      </Container>
    </MainClass>
  )
}