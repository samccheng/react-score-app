import React from 'react'
import PropTypes from 'prop-types'


export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
