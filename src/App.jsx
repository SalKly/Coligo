import React, { useState, useEffect } from 'react';
import './style.css';
import './general.css';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Data from './info'
import Search from './Components/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  const [UsersInfo, SetusersInfo] = useState(Data)
  console.log(UsersInfo);




  useEffect(() => {

    const info = window.localStorage.getItem("Coligo")
    SetusersInfo(JSON.parse(info));


  }, [])

  useEffect(() => {
    window.localStorage.setItem("Coligo", JSON.stringify(UsersInfo))

  })

  function removeUser(id) {
    SetusersInfo(prev => {
      let NewUsers;
      return NewUsers = prev.filter((user) => {
        return user.id !== id
      })

    })

  }


  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
        <Route path='/SearchFriend' element={<Search FriendsList={UsersInfo} AddFriend={SetusersInfo}></Search>}>

        </Route>
        <Route path='/FriendsList' element={<Cards remove={removeUser} UsersInfo={UsersInfo} ></Cards>}></Route>

      </Routes>
    </Router>
  )

}

export default App;
