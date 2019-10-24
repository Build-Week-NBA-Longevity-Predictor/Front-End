import React from 'react';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Homepage = () => {

  return(
    <>
    <div className='button-box'>
      <Link to='/login'>
        <Button className='button-styling'>Log In Now!</Button>
      </Link>
      <Link to='/account'>
        <Button className='button-styling'>Sign Up Now!</Button>
      </Link>
    </div>
    </>
  )
}

export default Homepage