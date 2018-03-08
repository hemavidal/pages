import React from 'react'
import Link from 'gatsby-link'
import profileImg from '../../images/profile.jpeg'

const Header = () => (
  <div
    style={{
      background: '#3498db',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      <img src={profileImg} style={{width:180, marginTop: 50, borderRadius:100}}/>
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Hemã Vidal Negreiros Bezerra
        </Link>
        <p style={{fontSize:20, marginTop:10}}>Engenheiro de Software</p>
      </h1>
    </div>
  </div>
)

export default Header
