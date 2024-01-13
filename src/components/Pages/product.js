import React, { useState } from 'react';
import '../../App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './product.css'

const ProductPage = () => {
    const [showFilter, setShowFilter] = useState(false);
  
    const toggleColumns = () => {
      setShowFilter(!showFilter);
  
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.classList.toggle('hide');
      }
    };
      const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const toggleSortOption = () => {
    setSortMenuOpen(!sortMenuOpen);
  };

  const updateSortBy = (sortByOption) => {
    console.log(`Sorting by: ${sortByOption}`);

 
    setSortMenuOpen(false);
  };
    return (
        <>
        <Header />
        
        <div id="product-body">
    <div id="close-filters" className="filter-close-container">
        <span id="close-filter" className="close-filter">X</span>
    </div>

    <div id="apply-container" className="apply-container">
        <span id="apply-button" className="apply-result-button">Apply</span>
    </div>

    <div id="product-header">
        <div className="container container-product">
            <div className="row">
                <div className="col-md-12 subheading">
                    <h1 style={{ textAlign: 'left', fontSize: '24px', lineHeight: '1.3' }}>Sale
                    <span>(100)</span>
                    </h1>

                    <div id="filter-button" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div id="small-filter">
                            <div className="small-filter-box">
                                <button className="small-filter-btn" style={{ display: 'none', cursor: 'pointer', border: '1px solid #808080', borderRadius: '20px', height: '30px', backgroundColor: '#FFFFFF' }}><span style={{ marginLeft: '15px', marginRight: '5px', fontWeight: '600' }}>Filter</span><i className='bx bx-filter' style={{ marginRight: '13px' }}></i></button>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="filter-content" className="filter-content">
                            <span className="hide-show" style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', marginRight: '20px' }} onClick={toggleColumns}>
                            {showFilter ? 'Hide Filter' : 'Show Filter'}
                            <i className='bx bx-filter' style={{ fontSize: '18px' }}></i>
                            </span>
                        </div>
                        <div className="sort-by">
                            <button id="sort-by-name" style={{ backgroundColor: 'white', cursor: 'pointer' }} onclick="toggleSortOption()">
                                <span id="sort-by-text" style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px' }}> Sort By
                                </span>
                                <i className="fa-solid fa-caret-down" style={{ marginLeft: '10px', cursor: 'pointer' }}></i>
                            </button>
                        </div>
                        <div id="sort-option">
                            <div className="drop-down-sort">
                                <button className="dropdown-option" onclick="updateSortBy('Featured', this)">Featured</button>
                                <button className="dropdown-option" onclick="updateSortBy('Newest', this)">Newest</button>
                                <button className="dropdown-option" onclick="updateSortBy('Price: High-Low', this)">Price: High-Low</button>
                                <button className="dropdown-option" onclick="updateSortBy('Price: Low-High', this)">Price: Low-High</button>
                            </div>
                        </div>
                        <span id="filter-button-mobile" className="filter-mobile">
                            <span>Filter</span>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    <div id="product-main">
        <div className="container product-main-container">
            <div className="row">
                <div className={`col-md-${showFilter ? '3' : '0'} sidebar-content`} id="sidebar-container">
                    <section id="sidebar" className="sidebar">
                        <ul className="sort-by-menu" style={{ listStyle: 'none' }}>
                            <div id="SortByContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="SortByButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleSortList()">
                                    <span  style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Sort By</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="sortList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="featured" className="filter-button"/>
                                        <label for="featured"  style={{ display: 'inline-flex' }}>Featured</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="newest" className="filter-button"/>
                                        <label for="newest"  style={{ display: 'inline-flex' }}>Newest</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="PriceHighLow" className="filter-button"/>
                                        <label for="PriceHighLow" style={{ display: 'inline-flex', marginBottom: '20px' }}>Price: High-Low</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="PriceLowHigh" className="filter-button"/>
                                        <label for="PriceLowHigh" style={{ display: 'inline-flex', marginBottom: '20px' }}>Price: High-Low</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>

                        <ul style={{ listStyle: 'none' }}>
                            <div id="CategoryContainer"  style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="CategoryButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleCategoryList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Categories</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="CategoryList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                <li className="clickable">
                                    <input type="checkbox" id="clothes" className="filter-button" />
                                    <label htmlFor="clothes" style={{ display: 'inline-flex' }}>Clothes</label>
                                </li>
                                <li className="clickable">
                                    <input type="checkbox" id="Pants" className="filter-button" />
                                    <label htmlFor="Pants" style={{ display: 'inline-flex' }}>Pants</label>
                                </li>
                                <li className="clickable">
                                     <input type="checkbox" id="Shoes" className="filter-button" />
                                    <label htmlFor="Shoes" style={{ display: 'inline-flex', marginBottom: '20px' }}>Shoes</label>
                                 </li>
                                </ul>
                            </div>
                        </ul>

                        <ul style={{ listStyle: 'none' }}>
                            <div id="genderContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="genderButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleGenderList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Gender</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="genderList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="menCheckbox1" className="filter-button"/>
                                        <label for="menCheckbox1" style={{ display: 'inline-flex' }}>Men</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="womenCheckbox" className="filter-button"/>
                                        <label for="womenCheckbox" style={{ display: 'inline-flex' }}>Women</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="unisexCheckbox" className="filter-button"/>
                                        <label for="unisexCheckbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>Unisex</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                        
                        
                        <ul style={{ listStyle: 'none' }}>
                            <div id="priceContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="priceButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="togglePriceList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Shop By Price</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="priceList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="50Checkbox1" className="filter-button"/>
                                        <label for="50Checkbox1" style={{ display: 'inline-flex' }}>Under 50$</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="50-100Checkbox" className="filter-button"/>
                                        <label for="50-100Checkbox" style={{ display: 'inline-flex' }}>50$ - 100$</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="100-250Checkbox" className="filter-button"/>
                                        <label for="100-250Checkbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>100$ - 250$</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="over250Checkbox" className="filter-button"/>
                                        <label for="over250Checkbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>Over 250$</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                
                        <ul style={{ listStyle: 'none' }}>
                            <div id="saleContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="saleButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleSaleList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Sale & Offers</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="saleList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="saleCheckbox1" className="filter-button"/>
                                        <label for="saleCheckbox1" style={{ display: 'inline-flex' }}>Sale</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                
                        <ul style={{ listStyle: 'none' }}>
                            <div id="colourContainer" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleColorList()">
                                <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Colour</span>
                                <i id="caretdown" className="fa-solid fa-caret-down"></i>
                            </div>
                            <div id="colourList" style={{ height: 'auto', transition: 'none 0s ease 0s', overflow: 'hidden', paddingLeft: '0px', display: 'block' }}>
                                <div style={{ padding: '8px 0 10px' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#8D429F' }}></div>
                                            <span className="color-text">Purple</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#000000' }}></div>
                                            <span className="color-text">Black</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#E7352B' }}></div>
                                            <span className="color-text">Red</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#F36B26' }}></div>
                                            <span className="color-text">Orange</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose"  style={{ backgroundColor: '#1790C8' }}></div>
                                            <span className="color-text">Blue</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose"  style={{ backgroundColor: '#ffffff' }}></div>
                                            <span className="color-text">White</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product-white"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#825D41' }}></div>
                                            <span className="color-text">Brown</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#7BBA3C' }}></div>
                                            <span className="color-text">Green</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#FED533' }}></div>
                                            <span className="color-text">Yellow</span>
                                            <i  className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ background: 'radial-gradient(#FFFFFF 20%,transparent 20%), radial-gradient(#FFFFFF 20%,transparent 20%), #000',backgroundPosition: '0 0, 8px 8px',backgroundSize: '15px 15px',}}></div>
                                            <span className="color-text">Multi-Colour
                                            </span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#808080' }}></div>
                                            <span className="color-text">Grey</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                        <button className="color-button" onclick="toggleIcon(this)">
                                            <div className="color-choose" style={{ backgroundColor: '#F0728F' }}></div>
                                            <span className="color-text">Pink</span>
                                            <i className="fa-solid fa-check fa-beat img-color-product"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ul>
                
                        <ul style={{ listStyle: 'none' }}>
                            <div id="brandContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="brandButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleBrandList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Brand</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="brandList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="nikeSportswearCheckbox1" className="filter-button"/>
                                        <label for="nikeSportswearCheckbox1" style={{ display: 'inline-flex' }}>Nike Sportswear</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="jordanCheckbox" className="filter-button"/>
                                        <label for="jordanCheckbox" style={{ display: 'inline-flex' }}>Jordan</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="nikeByYouCheckbox" className="filter-button"/>
                                        <label for="nikeByYouCheckbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>Nike By You</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="acgCheckbox" className="filter-button"/>
                                        <label for="acgCheckbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>ACG</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="nikeCheckbox" className="filter-button"/>
                                        <label for="nikeCheckbox" style={{ display: 'inline-flex', marginBottom: '20px' }}>Nike</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                
                        <ul style={{ listStyle: 'none' }}>
                            <div id="sportsContainer" style={{ borderBottom: '1px solid #E5E5E5' }}>
                                <div id="sportsButton" style={{ marginBottom: '20px', display: 'inline-flex', justifyContent: 'space-between', width: '98%', cursor: 'pointer' }} onclick="toggleSportsList()">
                                    <span style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'left' }}>Sports</span>
                                    <i id="caretdown" className="fa-solid fa-caret-down"></i>
                                </div>
                                <ul id="sportsList" style={{ listStyle: 'none', paddingLeft: '0px', display: 'block' }}>
                                    <li className="clickable">
                                        <input type="checkbox" id="lifestyleCheckbox" className="filter-button"/>
                                        <label for="lifestyleCheckbox" style={{ display: 'inline-flex' }}>Lifestyle</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="runningCheckbox" className="filter-button"/>
                                        <label for="runningCheckbox" style={{ display: 'inline-flex' }}>Running</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="trainingGymCheckbox" className="filter-button"/>
                                        <label for="trainingGymCheckbox" style={{ display: 'inline-flex' }}>Training & Gym</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="basketballCheckbox" className="filter-button"/>
                                        <label for="basketballCheckbox" style={{ display: 'inline-flex' }}>Basketball</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="footballCheckbox" className="filter-button"/>
                                        <label for="footballCheckbox" style={{ display: 'inline-flex' }}>Football</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="golfCheckbox" className="filter-button"/>
                                        <label for="golfCheckbox" style={{ display: 'inline-flex' }}>Golf</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="skateboardingCheckbox" className="filter-button"/>
                                        <label for="skateboardingCheckbox" style={{ display: 'inline-flex' }}>Skateboarding</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="tennisCheckbox" className="filter-button"/>
                                        <label for="tennisCheckbox" style={{ display: 'inline-flex' }}>Tennis</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="athleticsCheckbox" className="filter-button"/>
                                        <label for="athleticsCheckbox" style={{ display: 'inline-flex' }}>Athletics</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="walkingCheckbox" className="filter-button"/>
                                        <label for="walkingCheckbox" style={{ display: 'inline-flex' }}>Walking</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="volleyballCheckbox" className="filter-button"/>
                                        <label for="volleyballCheckbox" style={{ display: 'inline-flex' }}>Volleyball</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="danceCheckbox" className="filter-button"/>
                                        <label for="danceCheckbox" style={{ display: 'inline-flex' }}>Dance</label>
                                    </li>
                                    <li className="clickable">
                                        <input type="checkbox" id="cyclingCheckbox" className="filter-button"/>
                                        <label for="cyclingCheckbox" style={{ display: 'inline-flex' }}>Cycling</label>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </section>
                </div>
                
                <div className={`col-md-${showFilter ? '9' : '12'} product-column`} id="main-content">
                             <div className="row product-row">
                    
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/cap 1.webp" alt=""/>
                                </a>

                              

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">Ultralight Flash</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$35.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/shirt 1.webp" alt=""/>
                                </a>

                                <figure style={{ background: '#e12c43', color: '#ffffff' }} className="absolute uppercase label-sale">
                                    <span>-20%</span>
                                </figure>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">TOP CREW MEN</a>
                            </h4>
                            <p className="product-price">
                                <s className="">$67.00</s>
                                <span className="">$54.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/shirt 2.webp" alt=""/>
                                </a>

                              

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">RONHILL Core Tee</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$25.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/shirt 3.webp" alt=""/>
                                </a>

                                <figure style={{ background: '#e12c43', color: '#ffffff' }} className="absolute uppercase label-sale">
                                    <span>-27%</span>
                                </figure>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">ODLO Active Spine</a>
                            </h4>
                            <p className="product-price">
                                <s className="">$67.00</s>
                                <span className="">$49.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/shirt 4.webp" alt=""/>
                                </a>

                                <figure style={{ background: '#e12c43', color: '#ffffff' }} className="absolute uppercase label-sale">
                                    <span>-25%</span>
                                </figure>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">INOV-8 Women</a>
                            </h4>
                            <p className="product-price">
                                <s className="">$74.95</s>
                                <span className="">$56.21</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/cap 2.webp" alt=""/>
                                </a>

                                <figure style={{ background: '#e12c43', color: '#ffffff' }} className="absolute uppercase label-sale">
                                    <span>-23%</span>
                                </figure>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">Ciele Athletics</a>
                            </h4>
                            <p className="product-price">
                                <s className="">$45.00</s>
                                <span className="">$34.95</span>
                            </p>
                        </div>  
                    </div><div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 1.webp" alt=""/>
                                </a>

                                <figure style={{ background: '#e12c43', color: '#ffffff' }} className="absolute uppercase label-sale">
                                    <span>-15%</span>
                                </figure>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Women</a>
                            </h4>
                            <p className="product-price">
                                <s className="">$28.00</s>
                                <span className="">$24.00 </span>
                            </p>
                        </div>  
                    </div><div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 2.webp" alt=""/>
                                </a>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Men</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$67.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 2.webp" alt=""/>
                                </a>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Men</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$67.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 2.webp" alt=""/>
                                </a>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Men</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$67.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 2.webp" alt=""/>
                                </a>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Men</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$67.00</span>
                            </p>
                        </div>  
                    </div>
                    <div className="product-box">
                        <div className="product">
                            <div className="img-product">
                                <a href="">
                                    <img style={{ width: '100%' }} src="Shoes/IMAGES/Home_Page_Picture/short 2.webp" alt=""/>
                                </a>

                                <ul className="product-icon">
                                    <li className="add-cart mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-bag-shopping icon-1"></i>
                                        </a>
                                    </li>
                                    <li className="view-product mr-0">
                                        <a href="">
                                            <i className="fa-solid fa-magnifying-glass icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="add-favorite mr-0">
                                        <a href="">
                                            <i className="fa-regular fa-heart icon-3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="product-title">
                                <a href="">2IN1 Short Men</a>
                            </h4>
                            <p className="product-price">
                                <s className=""></s>
                                <span className="">$67.00</span>
                            </p>
                        </div>  
                    </div>
                  
                   

                    

    
                </div>
                </div>
            </div>
        </div>
    </div>

    </div>
        
        <Footer />
        </>
    );
}

export default ProductPage;