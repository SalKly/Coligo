import React from 'react'
import { BsHeart } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import styled from "styled-components";


function CardsItem(props) {
  return (
    <div className='CardItem'>
      <div className='CardViews'>
        <div className='Card-Front'>
          <div className='CardItem-Toplayer'>
            <div className='CardItem-text'>
              <div className='CardItem-State'>{props.User.type}</div>

              <p className='CardItem-Name'><span className='Placeholders'>Name:</span> {props.User.name}</p>
              <p className='CardItem-Major'><span className='Placeholders'>Company:</span> {props.User.Company}</p>
              <p className='CardItem-location'><span className='Placeholders'>Location:</span>{props.User.location}</p>


            </div>
            <img className='Cardimg' src={process.env.PUBLIC_URL + props.User.image}></img>
          </div>


        </div>
        <div className='Card-Back'>
          <BsHeart className='Card-Backicon'></BsHeart>
          <IoIosRemoveCircleOutline onClick={() => {
            props.remove(props.User.id)
          }} className='Card-Backicon'> </IoIosRemoveCircleOutline>
          <a href='#' className="btn-S  btn-full ">Email</a>
          <a href='#' className="btn-S btn-full" >Call</a>

        </div>
      </div>
    </div>
  )
}

export default CardsItem