import './App.css';
// Components
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
// Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div className="App">
    <Router>
      <Home />
      <GlobalStyle />
    </Router>
  </div>
);

export default App;
