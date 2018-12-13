import React, { Component } from 'react'

export default class SiteNav extends Component {
    render() {
        return (
          <Router>
            <div className="App">
              <nav>
                <Link to="/">Manage</Link>
                <Link to="/preview">Preview</Link>
              </nav>
              <Switch>
                <Route path="/" exact component={ManagePage}/>
                <Route path="/preview" component={PreviewPage}/>
              </Switch>
            </div>
          </Router>
        )
      }
}