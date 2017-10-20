import React from 'react'
import AddPlayer from './AddPlayer'
import Header from './Header'
import PlayerList from './PlayerList'
import PropTypes from 'prop-types'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="scorekeeper"/>
        <div className="wrapper">
          <AddPlayer />
          <PlayerList players={this.props.players}/>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
