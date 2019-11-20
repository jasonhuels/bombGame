import React from "react";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';
import Home from './Home';

function App() {
  return (
    <div>
      <style jsx global>{styles}</style>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </div>
  );
}

export default App;