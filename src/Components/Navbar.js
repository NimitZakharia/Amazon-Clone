import React from 'react'
import "./Navbar.css"; 
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='Navbar'>
        {/*Amazon logo */}
        <img className="Navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        {/* Search bar */}
        <div className='Navbar__search'>
            <input className='Navbar__searchInput' placeholder='Search Amazon.in'/>
            <SearchIcon className="Navbar__searchIcon"/>
        </div>

        <div className='Navbar__options'>
            <div className='Navbar__option'>    
                <span className='Navbar__optionLineOne'>Hello Guest</span>
                <span className='Navbar__optionLineTwo'>Sign in</span>
            </div>
            <div className='Navbar__option'>    
                <span className='Navbar__optionLineOne'>Returns &</span>
                <span className='Navbar__optionLineTwo'>Orders</span>
            </div>
            <div className='Navbar__option'>    
                <span className='Navbar__optionLineOne'>Your Prime</span>
                <span className='Navbar__optionLineTwo'>Deals</span>
            </div>
        </div>
    </div>
  )
}

export default Header