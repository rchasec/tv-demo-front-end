import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav>
          <Link to="/">Manage</Link>
          <Link to="/preview">Preview</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={ManagePage} />
          <Route path="/preview" component={PreviewPage} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App
