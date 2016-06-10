import React, { Component, PropTypes } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      <h2>Hello Meteor!</h2>
    </div>
  }
}

App.propTypes = { 
}

export default App
