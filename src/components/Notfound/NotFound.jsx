import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='Page not Found'>
        <div className='content'>
          <img src="/notfound.png" alt="notfound" />
          <Link to={"/"}>Back to Home</Link>
        </div>
    </section>
  )
}

export default NotFound