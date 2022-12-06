import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// remember rfce

function Navbar() {
  return (
    <div className='navbar_container'>
        <div className='navbar_left'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix_logo' width='100px'/>

        <nav>
            <a href='#'>Home</a>
            <a href='#'>Tv Shows</a>
            <a href='#'>Movies</a>
            <a href='#'>Latest</a>
            <a href='#'>My List</a>
        </nav>
        </div>
        
        <div className='navbar_right'>
        <SearchIcon/>
        <NotificationsNoneIcon/>

        <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar' width='30px'/>
        </div>
    </div>
  )
}

export default Navbar