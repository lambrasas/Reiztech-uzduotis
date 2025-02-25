import { Link } from 'react-router-dom'
import notFound from '../assets/Not found.jpg'

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: 'black',
      }}
    >
      <img
        src={notFound}
        alt="face"
        style={{
          maxWidth: '90%',
          maxHeight: '90vh',
          objectFit: 'contain',
        }}
      />
      <p style={{ color: 'white' }}>
        So... You were checking <i>my error handling skills?</i>
      </p>
      <p style={{ color: 'white' }}>
        How about you check{' '}
        <a target="_blank" href="https://www.linkedin.com/in/linas-ambrasas/">
          this.
        </a>
      </p>
      <p>Or maybe you wanna go home?</p>
      <Link style={{ color: 'white' }} to="/">
        Home
      </Link>
    </div>
  )
}

export default NotFound
