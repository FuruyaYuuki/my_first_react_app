import styled from 'styled-components';
import { useState } from 'react';
import { Header } from "./Header"
import { Footer } from "./Footer"
import { QA } from "./QA"
import { AddQ } from "./AddQ"
import { QALists } from "../const/QAs"

const MainClass = styled.main`
  height: 807px;
`

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

const HeaderUl = styled.ul`
  display: flex;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

export const Home = () => {

  const [tab, setTab] = useState('qa');
  const [situmons, setSitumons] = useState(QALists);

  const addSitumon = (situmon) => {
    setSitumons([...situmons, situmon]);
    setTab('qa');
  }

  return (
    <div>
      <Header />

      <MainClass>
      <Container tab={tab} setTab={setTab}>
        <HeaderUl>
          <HeaderLi focused={tab === 'qa'} onClick={() => setTab('qa')}>質問一覧</HeaderLi>
          <HeaderLi focused={tab === 'addQ'} onClick={() => setTab('addQ')}>質問する</HeaderLi>
        </HeaderUl>
        {
        tab === 'qa' ? <QA situmons={situmons}/> : <AddQ onAddSitumon={addSitumon}/>
        }
      </Container>
     </MainClass>
  
      <Footer />
    </div>
  );
}
