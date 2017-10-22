import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Players, calculatePlayerPositions } from './../imports/api/players'
import App from './../imports/components/App'


Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, {sort: {score: -1}}).fetch()
    const positionPlayers = calculatePlayerPositions(players)
    const title = "scorekeeper"

    ReactDOM.render(<App title={title} players={positionPlayers}/>, document.getElementById('app'))
  })

})
