import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import HomeContent from './components/HomeContent/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';
import NotFound from './components/NotFound/index';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomeContent} />
          <Route exact path='/projects' component={Projects} />
          <Route component={NotFound} />
          {/* https://tylermcginnis.com/react-router-pass-props-to-components/ */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
