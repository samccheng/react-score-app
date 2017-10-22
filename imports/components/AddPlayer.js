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
      <div className="item">
        <form className="form" onSubmit={this.addPlayer}>
          <input className="form__input" type="text" name="playerName"/>
          <button className="button">add player</button>
        </form>
      </div>
    )
  }
}
