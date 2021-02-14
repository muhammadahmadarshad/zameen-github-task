import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Content from './pages/content';
import Search from './pages/search';

function App() {
  return (
    
        
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/search'>
              <Search/>
            </Route>
            <Route exact path='/gist-content/:id'>
              <Content/>
            </Route>
          </Switch>
        </BrowserRouter>
        
    )
}

export default App;
