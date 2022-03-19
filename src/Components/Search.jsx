import React, { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Search(props) {
  const [SearchUser, SetSearchUser] = useState(null)
  const [AlreadyAdded, SetAlreadyAdded] = useState(false)
  const [error, SetError] = useState(null)
  const [name, Setname] = useState('')
  useEffect(() => {
    fetch(`https://api.github.com/users/Example`)
      .then(res => res.json())
      .then(data => {
        SetSearchUser(data)

      })


  }, [])

  useEffect(() => {
    if (SearchUser) {
      let x = props.FriendsList.filter(Friend => {
        return Friend.id === SearchUser.id
      })
      if (x.length !== 0) {
        SetAlreadyAdded(true)
      }
      else {
        SetAlreadyAdded(false)
      }
    }
  }, [SearchUser, props.FriendsList])


  function handleSeach(e) {
    Setname(e.target.value)

  }

  function handleSubmit() {

    fetch(`https://api.github.com/users/${name}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          SetError(data.message)

        }
        else {
          SetSearchUser(data)
          SetError(null)
        }
      })

  }




  return (
    <section className='Search-Section'>
      <Link className='Home-Link' to={"/"}>
        <BsGithub className='GitIcon'></BsGithub>
      </Link>

      <div className='Container Search-Cont'>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()

        }}>
          <input onChange={handleSeach} className='SearchBar' minlength="4" placeholder='Username'></input>
          <button className='Searchbutton' >Search</button>
        </form>
        {!error ? <div className='Card-Found'>
          <img className='Card-Found-Picture' src={!SearchUser ? process.env.PUBLIC_URL + "/imgs/Default.png" : SearchUser.avatar_url} alt="UserImage" ></img>
          <div className='Card-Found-Text'>
            <p className='Card-Name'>{!SearchUser ? "Name" : SearchUser.name}</p>
            <p className='Card-Bio'>{!SearchUser ? "Location" : SearchUser.location}</p>
          </div>
          {!AlreadyAdded ?
            <button onClick={() => {
              SetAlreadyAdded(true);
              props.AddFriend(prev => {
                return [...prev, { name: SearchUser.name, Company: SearchUser.company ? SearchUser.company : "Not employed", image: SearchUser.avatar_url, id: SearchUser.id, type: SearchUser.type }]
              })
            }} className='Button-S Card-Found-Button' style={SearchUser ? SearchUser.name === null ? { display: "none" } : null : { display: "none" }} >Add friend</button> :
            <button className='Button-S Card-Found-AddedButton' style={SearchUser ? SearchUser.name === null ? { display: "none" } : null : { display: "none" }}>Already Added</button>

          }

        </div> : <div className='Card-NotFound'>
          <h1 className='Main-header header-notFound'>{error}</h1>
        </div>}




      </div>
      <img className='imgIlu' src='imgs/Friends3.svg'></img>

    </section >
  )
}

export default Search