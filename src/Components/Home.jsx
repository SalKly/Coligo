import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='Home-section'>
      <BsGithub className='GitIcon'></BsGithub>
      <div className='Container Home-Cont'>
        <h1 className='Main-header'>Coligo Challenge</h1>
        <div >
          <p className='Home-Text' >Add your github friends and followers in your List now!</p>
          <Link to={"/FriendsList"}>
            <a className='btn btn-full Home-Btn ' href='#'>Home Section</a>
          </Link>
          <Link to={"/SearchFriend"}>
            <a className='btn btn-outline' href='#'>Github</a>
          </Link>

        </div>
      </div>
      <div className="Home-Space">
        <ul className="Stars">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>


        </ul>
      </div>

    </div>
  )
}

export default Home