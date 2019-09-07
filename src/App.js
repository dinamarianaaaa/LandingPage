import React, { Component } from 'react'
import Cookie from './components/Cookie'
import Header from './components/Header'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div>
        <Cookie />
        <Header />
        <Body />

      </div>
    )
  }
}
export default App