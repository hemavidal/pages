import React, { Component } from 'react'

const styles = {
  card: {
    margin: '5%',
    width: '90%',
    border: '1px solid',
    padding: 20,
    borderColor: '#bdc3c7',
    borderRadius: 10
  }
}

class ExperienceCard extends Component {
  render() {
    return (
      <div style={styles.card}>
        {this.props.children}
      </div>
    )
  }
}

export default ExperienceCard
