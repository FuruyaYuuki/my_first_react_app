import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Q } from "./Q";
import { QA } from "./QA"
import { Header } from "./Header"
import { Main } from "./Main"
import { Footer } from "./Footer"

const Body = styled.body`
  margin: 0;
`

function App() {

  const [tab, setTab] = useState('q');

  return (
    <Body>
      <Header />

      <main>
        <div>
          <h1>回答を押してみましょう</h1>
          <Main />
          {
            tab === 'q' ? <Q /> : <QA />
          }
          <p onClick={() => setTab('qa')}>回答</p>
        </div>
      </main>

      <Footer />
    </Body>
  );
}

export default App;
