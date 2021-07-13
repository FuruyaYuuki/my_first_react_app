import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./Home"
import { Comment } from "./Comment"

const Body = styled.body`
  margin: 0 auto;
`

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Body>
        <Route exact path="/" component={Home} />
        <Route path="/comment" component={Comment} />
      </Body>
    </BrowserRouter>
  );
}

export default App;
