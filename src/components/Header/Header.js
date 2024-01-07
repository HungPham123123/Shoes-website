import React, { useState } from 'react';
import  './Header.css';
import Sidecart from '../Popup/sidecart';
import SearchBar from '../Popup/SearchBar';
import MiniMenu from '../Popup/MobileMenu';

function Header() {
    const [isSidecartOpen, setSidecartOpen] = useState(false);

    const handleOpenSidecart = () => {
      setSidecartOpen(true);
    };
  
    const handleCloseSidecart = () => {
      setSidecartOpen(false);
    };

    const [isSearchBarOpen, setSearchBarOpen] = useState(false);

    const handleOpenSearchBar = () => {
        setSearchBarOpen(true);
    };

    const handleCloseSearchBar = () => {
        setSearchBarOpen(false);
    }

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
         <SearchBar SearchOpen={isSearchBarOpen} SearchClose={handleCloseSearchBar} />
        <div id="header">
                <div className="container container-header">
                    <div className="row header-row">
                        <div className="col-md-2 header-1">
                            <a className="header-logo" href="index.html">WALKZ</a>

                            <div id="icon-navbar" className="icon-navbar" onClick={handleOpenMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="col-md-8 header-2" style={{ justifyContent: 'center', textAlign: 'center' }}>
                            <ul className="nav-item-box">
                                <li className="nav-item"><a href="index.html" className="underline">Home</a></li>
                                <li className="nav-item"><a href="product.html" className="underline">shop</a></li>
                                <li className="nav-item"><a href="aboutus.html" className="underline">about us</a></li>
                                <li className="nav-item"><a href="blog.html" className="underline">Blog</a></li>
                                <li className="nav-item"><a href="contact.html" className="underline">contact us</a></li>
                            </ul>
                            <div className="header-small-content">
                                <a style={{ display: 'none' }} className="header-logo-smaller" href="index.html">WALKZ</a>
                            </div>
                        </div>
                        <div className="col-md-2 header-3">
                            <ul className="icon-box">
                                <li className="nav-icon" id="search-icon" onClick={handleOpenSearchBar}> <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '18px' }}></i></li>
                                <li className="nav-icon user-icon"><a href="login.html"> <i className="fa-regular fa-user"></i></a></li>
                                <li style={{ position: 'relative' }} className="nav-icon" id="open-cart-btn" onClick={handleOpenSidecart}><i className="fa-solid fa-basket-shopping"></i>
                                    <span className="amount-cart">1</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <MiniMenu MenuOpen={isMenuOpen} MenuClose={handleCloseMenu} />
                <Sidecart isOpen={isSidecartOpen} onClose={handleCloseSidecart} />
            </div><section className="banner-section">
                <div className="container-fluid container-banner">
                    <div className="banner-sections">
                        <div className="box-content-right">
                            <div className="text-right box-info">
                                <div style={{ textAlign: 'right' }} className="box-title1">
                                    <h3 className="title-small mb-0">NEW!</h3>
                                </div>
                                <div className="box-title2">
                                    <h3 className="titlebig mb-0">MINZUNO INDOOR</h3>
                                </div>
                                <div className="box-title3">
                                    <h3 className="title-small mb-0">For players seeking a resilient K-Leather futsal shoe.<br />Especially suited to players with great technique and speed.</h3>
                                </div>
                                <div className="btn-banner">
                                    <a className="btn-banner-main" href="product.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default Header;