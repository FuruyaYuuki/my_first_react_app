import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./views/components/Home"
import { Comment } from "./views/components/Comment"
import { Table } from "./views/components/Search"
import { Show } from "./views/components/Show"

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/comment" component={Comment} />
        <Route path="/search" component={Table} />
        <Route path="/show" component={Show} />
      </div>
    </BrowserRouter>
  );
}

export default App;
