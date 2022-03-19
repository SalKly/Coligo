import React from 'react'
  ;
import CardsItem from './CardsItem';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';



function Cards(props) {
  return (
    <div className='Cards-Section'>
      <Link className='Home-Link' to={"/"}>
        <BsGithub className='GitIcon'></BsGithub>
      </Link>

      <div className='Container Cards-Cont'>
        <div className='Cards-Header'>
          <h2 className='Secondary-header'>FriendsList</h2>
          <p className='Cards-Header-Text'>You can press the minus sign on any one on the list to remove!!</p>
        </div>
        <div className='CardsItem-Cont grid grid-3cols'>
          {props.UsersInfo.map((User, index) => {
            return <CardsItem remove={props.remove} User={User} key={User.id} index={index} ></CardsItem>


          })}



        </div>
      </div>
    </div>
  )
}

export default Cards