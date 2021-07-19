import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./views/components/Home"
import { Comment } from "./views/components/Comment"
import { Table } from "./views/components/Search"
import { Show } from "./views/components/Show"

const Body = styled.body`
  margin: 0 auto;
`

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Body>
        <Route exact path="/" component={Home} />
        <Route path="/comment" component={Comment} />
        <Route path="/search" component={Table} />
        <Route path="/show" component={Show} />
      </Body>
    </BrowserRouter>
  );
}

export default App;
