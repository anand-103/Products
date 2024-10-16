import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh", flexDirection: "column" }}>
      <h1>Welcome to the home page!!!</h1>
      <div className="button d-block text-center">
        <label htmlFor="btn">Click here to see products</label><br />
        <a href="/Product"><input type="button" value="Products" id='btn'
        className='bg-primary border-0 py-2 px-3 text-light rounded' style={{ marginTop: "10px" }} /></a>
      </div>
    </div>
    </div>
      
  )
}

export default Home
