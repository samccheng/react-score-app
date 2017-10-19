import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  const Dashboard = () => (
    <div>dashboard</div>
  )

  ReactDOM.render(<Dashboard />, document.getElementById('app'))
})
