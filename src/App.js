import styled from 'styled-components';
import './App.css';
import { Header } from "./Header"
import { Main } from "./Main"
import { Footer } from "./Footer"

const Body = styled.body`
  margin: 0;
`

function App() {

  return (
    <Body>
      <Header />

      <Main />

      <Footer />
    </Body>
  );
}

export default App;
