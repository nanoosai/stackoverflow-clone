import React, { useEffect }from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/favicon.jpeg'
import search from '../../assets/search.jpeg'
import Avatar from '../../component/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var User = useSelector((state) => (state.currentUserReducer))

  const handleLogout = () =>{
    dispatch({ type:'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  

   useEffect(() =>{
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))));
   }, [User?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to='/' className="nav-item nav-logo">
          <img src={logo} width="100px" alt='logo' />
        </Link>
        <Link to='/' className="nav-item nav-btn">About</Link>
        <Link to='/' className="nav-item nav-btn">Products</Link>
        <Link to='/' className="nav-item nav-btn">For teams</Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="" width="18" className="search-icon" />
        </form>
        { User === null ?
          <Link to ='/Auth' className="nav-item nav-links">Log in</Link>:  
          <div>
          <Avatar backgroundColor= '#009dff' px='4px' py='4px' borderRadius='50%' color='white'><Link to = {`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
          <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
          </div>
        }
      </div>
    </nav>
  )
}
export default Navbar;