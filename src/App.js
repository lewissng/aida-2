import './App.scss';
import Nav from './Components/NavBar/nav';
import Home from './Components/Pages/home';
import Profile from './Components/Pages/profile';
import Contact from './Components/Pages/contact';
import Clock from './Components/Utilities/clock';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './Styles/theme.scss';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    (theme === 'dark') ? setTheme('light') : setTheme('dark');
  }

  return (
    <Router>
      <Nav onClick={handleClick} mode={(theme === 'dark') ? 'Light Theme' : 'Dark Theme'} />
      <div className={`App ${theme}`}>
        <Clock />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
