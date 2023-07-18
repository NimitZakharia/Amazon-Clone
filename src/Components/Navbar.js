import React from 'react'
import "./Navbar.css"; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from "react-router-dom";
import { useStateValue } from '../stateProvider';
function Header() {
    const [{cart}] = useStateValue();
  return (
    <div className='Navbar'>
        {/*Amazon logo */}
        <Link to="/">
        <img className="Navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='amazon_logo' />
        </Link>
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
            <Link to="/checkout">
            <div className='Navbar__cart'>
                <ShoppingCartIcon className='Navbar_shoppingCartIcon'/>
                <span className='Navbar__optionLineTwo Navbar__cartCount'>{cart.length}</span>

            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header