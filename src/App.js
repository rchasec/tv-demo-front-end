import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ManagePage from './ManagePage'
import PreviewPage from './PreviewPage'

export default class App extends Component {
  state = { 
    show: ""
    }
  tvShowDeleted = () => {
    console.log('tvShowDeleted')
    this.setState({ 
    show: ""
    })
  }
  saveTvShow = (showToSave) => {
    this.setState({
      show: {
        nameSaved: showToSave.nameSaved,
        ratingSaved: showToSave.ratingSaved,
        imageUrlSaved: showToSave.imageUrlSaved
      }
    })
  }
  renderManagePage = () => {
    return(
      <ManagePage show={this.state.show}
                  tvShowDeleted={this.tvShowDeleted}
                  saveTvShow={this.saveTvShow}/>
    )
  }
  renderPreviewPage = () => {
    return(
      <PreviewPage show={this.state.show}/>
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Manage</Link>
            <Link to="/preview">Preview</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={this.renderManagePage}/>
            <Route path="/preview" component={this.renderPreviewPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

