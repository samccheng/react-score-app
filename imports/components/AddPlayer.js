import React from 'react'
import { Players } from './../api/players'

export default class AddPlayer extends React.Component {
  addPlayer(e) {
    e.preventDefault()
    let player = e.target.playerName.value

    if (player) {
      e.target.playerName.value = ''
      Players.insert({
        name: player,
        score: 0
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addPlayer}>
          <input type="text" name="playerName"/>
          <button>add player</button>
        </form>
      </div>
    )
  }
}
