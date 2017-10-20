import React from 'react'
import { Players } from './../api/players'
import PropTypes from 'prop-types'


export default class Player extends React.Component {


render() {
    return (
      <div className="item" key={this.props.player._id}>
        <p >
          {this.props.player.name} has {this.props.player.score} points
        </p>
        <button className="button button--round" onClick={() => Players.update( this.props.player._id, { $inc: {score: 1 }})}>+1</button>
        <button className="button button--round" onClick={() => Players.update( this.props.player._id, { $inc: {score: -1 }})}>-1</button>
        <button className="button button--round" onClick={() => Players.remove( this.props.player._id )}>x</button>
      </div>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}
