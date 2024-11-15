import React, { useState } from "react";
import "../styles/mandup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from "antd";
import { Slider } from "antd";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
const Mandupp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countValue, setCountValue] = useState(0);
  const [priceRange, setPriceRange] = useState(300);
  const [overAllPricing, setOverAllPricing] = useState(300);
  const [filterData, setFilterData] = useState([])
  const [serarchLocation, setSearchLocation] = useState('')
  const [searchedLocation, setSearchedLocation] = useState([])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleMinus = () => {
    if (countValue === 0) {
      return;
    } else {
      setCountValue(countValue - 1);
    }
  };
  const handlePlus = () => {
    setCountValue(countValue + 1);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
    let data = venues?.filter((item) => item?.minPrice <= value);
    setFilterData(data)
  };

  const handleSliderAllChange = (value) => {
    setOverAllPricing(value)
  };

  const handleLocationChange = (e) => {
    if (e.key === 'Enter') {
    const searchValue = e?.target?.value?.toLowerCase(); 
    const newSearchObject = {
      location: e.target.value,
    };
    setSearchedLocation((prevSearchValue) => [...prevSearchValue, newSearchObject]);
    let filteredData = venues?.filter((item) => {
      return item?.location?.toLowerCase().includes(searchValue); 
    });
    setSearchLocation('')
    setFilterData(filteredData)
  }
  }

  const removeValue = (e) => {
    const locationName = e?.target?.name;
    setSearchedLocation((prevLocations) => 
      prevLocations.filter((location) => location.location !== locationName)
    );
  }

  const handleChangeLocation = (e) => {
    setSearchLocation(e?.target?.value)
  }
  const venues = [
    {
      name: "The Gracious Banquet",
      location: "Connaught Place, New Delhi",
      rating: 4.8,
      priceRange: "₹400 - ₹600 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueOne.svg",
      minPrice:'400'
    },
    {
      name: "Royal Orchid Hotel",
      location: "Connaught Place, New Delhi",
      rating: 4.5,
      priceRange: "₹500 - ₹700 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueTwo.svg",
      minPrice:'500'
    },
    {
      name: "Elegance Resort",
      location: "MG Road, Bangalore",
      rating: 4.7,
      priceRange: "₹450 - ₹650 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueThree.svg",
      minPrice:'450'
    },
    {
      name: "Paradise Lawn",
      location: "Alkapuri, Vadodara",
      rating: 4.3,
      priceRange: "₹300 - ₹500 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueOne.svg",
      minPrice:'300'
    },
    {
      name: "Majestic Palace",
      location: "Banjara Hills, Hyderabad",
      rating: 4.9,
      priceRange: "₹600 - ₹900 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueTwo.svg",
      minPrice:'600'
    },
    {
      name: "Regal Event Hall",
      location: "Salt Lake, Kolkata",
      rating: 4.4,
      priceRange: "₹350 - ₹550 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueThree.svg",
      minPrice:'350'
    },
    {
      name: "Sunset Garden",
      location: "Marine Drive, Mumbai",
      rating: 4.6,
      priceRange: "₹400 - ₹800 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueOne.svg",
      minPrice:'400'
    },
    {
      name: "Celestial Banquet",
      location: "Koregaon Park, Pune",
      rating: 4.5,
      priceRange: "₹500 - ₹750 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueTwo.svg",
      minPrice:'500'
    },
    {
      name: "Oasis Lawn",
      location: "C-Scheme, Jaipur",
      rating: 4.2,
      priceRange: "₹350 - ₹500 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueThree.svg",
      minPrice:'350'
    },
    {
      name: "Emerald Hall",
      location: "Sector 29, Gurugram",
      rating: 4.8,
      priceRange: "₹600 - ₹850 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueOne.svg",
      minPrice:'600'
    },
    {
      name: "Lotus Lakeview",
      location: "Hauz Khas, New Delhi",
      rating: 4.7,
      priceRange: "₹450 - ₹700 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueTwo.svg",
      minPrice:'450'
    },
    {
      name: "The Grand Ballroom",
      location: "Churchgate, Mumbai",
      rating: 4.9,
      priceRange: "₹700 - ₹1000 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueThree.svg",
      minPrice:'700'
    },
    {
      name: "Heritage Palace",
      location: "Amer Road, Jaipur",
      rating: 4.6,
      priceRange: "₹500 - ₹800 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueOne.svg",
      minPrice:'500'
    },
    {
      name: "Infinity Terrace",
      location: "Juhu Beach, Mumbai",
      rating: 4.5,
      priceRange: "₹650 - ₹900 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueTwo.svg",
      minPrice:'650'
    },
    {
      name: "Pearl Grand",
      location: "Rajouri Garden, New Delhi",
      rating: 4.4,
      priceRange: "₹400 - ₹600 ",
      amenities: ["Indoor", "10 Rooms", "+4 more"],
      imageUrl: "/images/venueThree.svg",
      minPrice:'400'
    },
  ];


  const data = filterData?.length ? filterData : venues;

  const [sortOption, setSortOption] = useState("Rating");
  const [sortedData, setSortedData] = useState(venues);

  const handleSortChange = (option) => {
    setSortOption(option);    

    let sortedArray = [...venues];
    if (option === "rating") {
      sortedArray.sort((a, b) => b.rating - a.rating); 
      sortedArray.filter(item =>{
        return item.minPrice <= priceRange;
      })
      
    } else if (option === "Newest") {
      sortedArray.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); 
    } else {
      sortedArray = [...venues]; 
    }

    setSortedData(sortedArray);
    setFilterData(sortedArray);
  };



  return (
    <div className="mainContainer">
      <>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="filterOptionResponsive p-4">
            <p className="mb-0 filterResult">Filter Results</p>
            <div className="mt-4">
              <p className="mb-0 venueLocation">Location</p>
              <div className="border venueSearch pt-1 pb-1 ps-3 pe-1 mt-1">
                  <img src="/images/magnifying.svg" className="me-2"></img>
                  <input type="search"></input>
              </div>
            </div>
            <div>
              <div className="d-flex mt-2">
                <div className="rounded searchBar">
                  <p className="mb-0 searchLocation d-flex">
                    New Delhi <img src="/images/closeSmall.svg"></img>
                  </p>
                </div>
                <div className="ms-2 rounded searchBar">
                  <p className="mb-0 searchLocation d-flex">
                    Noida <img src="/images/closeSmall.svg"></img>
                  </p>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div className="border veg ps-2 pe-2 pt-1 pb-1 ">
                  <p className="mb-0 d-flex">
                    <img src="/images/veg.svg" className="me-1"></img>Veg
                  </p>
                </div>
                <div className="border nonveg ms-2 ps-2 pe-2 pt-1 pb-1">
                  <p className="mb-0 d-flex">
                    <img src="/images/nonVeg.svg" className="me-1"></img>Non-Veg
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="rangePrice">
                  <label htmlFor="customRange1" className="form-label">
                    Price Range
                  </label>
                  <Slider
                    min={300} 
                    max={1000} 
                    step={10} 
                    value={priceRange} 
                    onChange={handleSliderChange} 
                    tooltip={{
                      open: false,
                    }}
                  />
                  <div className="d-flex">
                    <p className="w-50 mb-0">
                      {"\u20B9"}
                      {priceRange}
                    </p>
                    <p className="w-50 mb-0 text-end">{"\u20B9"}1000</p>
                  </div>
                </div>
                <div className="rangePrice mt-3">
      <label htmlFor="customRange1" className="form-label">
        Overall Pricing
      </label>
      <Slider
        min={300}
        max={1000} 
        step={10} 
        value={overAllPricing} 
        onChange={handleSliderAllChange} 
        tooltip={{
          open: false, 
        }}
      />
      <div className="d-flex">
        <p className="w-50 mb-0">
          {"\u20B9"}
          {overAllPricing}
        </p>
        <p className="w-50 mb-0 text-end">{"\u20B9"}1000</p>
      </div>
    </div>
              </div>
              <div className="mt-4">
                <p className="mb-0 venueLocation">Venue Type</p>
                <div className="border venueSearch pt-1 pb-1 ps-3 pe-1 mt-1">
                  <p className="mb-0">Select type of destination</p>
                </div>
                <div className="d-flex mt-2">
                  <div className="rounded searchBar">
                    <p className="mb-0 searchLocation d-flex">
                      New Delhi <img src="/images/closeSmall.svg"></img>
                    </p>
                  </div>
                  <div className="ms-2 rounded searchBar">
                    <p className="mb-0 searchLocation d-flex">
                      Noida <img src="/images/closeSmall.svg"></img>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <p className="me-3 mb-0 text-center">Room Count</p>
                <InputGroup className="w-auto border">
                  <Button variant="">&minus;</Button>
                  <FormControl
                    className="text-center"
                    readOnly
                    style={{ maxWidth: "50px" }}
                  />
                  <Button variant="">&#43;</Button>
                </InputGroup>
              </div>
              <div className="rating-filter mt-3">
                <h5 className="rating-title mb-2">Rating/Reviews</h5>
                <div className="stars">
                  <i className="fa fa-star filled-star"></i>
                  <i className="fa fa-star filled-star"></i>
                  <i className="fa fa-star filled-star"></i>
                  <i className="fa fa-star filled-star"></i>
                  <i className="fa fa-star empty-star"></i>
                </div>
                <div className="buttons d-flex justify-content-end mt-3">
                  <button className="btn clear-btn border clearAll">
                    Clear All
                  </button>
                  <button className="btn apply-btn border applyFilter">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
      <div className="container pt-4">
        <Navbar bg="white" expand="lg" className="border-bottom py-3">
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <img
                src="/images/logo.svg"
                alt="Logo"
                height="40"
                className="mr-2"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/venues">Venues</Nav.Link>
                <Nav.Link href="/e-invites">E-Invites</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/love-notes">Love Notes</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
              </Nav>

              <Nav className="ml-auto d-flex align-items-center">
                <Nav.Link href="/login" className="mr-3">
                  Login
                </Nav.Link>
                <Button href="/signup" className="signup-button signupBtn">
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container d-flex justify-content-between pt-4">
        <div className="">
          <p className="mb-0 venuesAll"> Venues</p>
        </div>
        <div className="d-flex">
          <img
            src="/images/filter.png"
            className="filterImg"
            onClick={showModal}
          ></img>
          <div className="sort-dropdown-container d-flex justify-content-center align-items-center border dropDownBtn ps-2 pe-2">
            <span className="sort-text me-2">Sort by</span>
            <DropdownButton
              id="dropdown-basic-button"
              title="Popularity"
              className="rounded-dropdown"
            >
              <Dropdown.Item onClick={() => handleSortChange("Popularity")}>
            Popularity
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("rating")}>
            Rating
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange("Newest")}>
            Newest
          </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
      <div className="container d-flex mt-3 venueCardContainer">
        <div className="filterOption p-4">
          <p className="mb-0 filterResult">Filter Results</p>
          <div className="mt-4">
            <p className="mb-0 venueLocation">Location</p>
            <div className="border venueSearch pt-1 pb-1 ps-3 pe-1 mt-1">
                  <img src="/images/magnifying.svg" className="me-2"></img>
                  <input  value={serarchLocation} type="search" className="searchBaar" onKeyDown={handleLocationChange} onChange={handleChangeLocation}></input>
              </div>
          </div>
          <div>
            <div className="d-flex mt-2 flex-wrap">
              {searchedLocation?.map((item, index) => 
              <div className="rounded searchBar me-2 mb-2">
                <p className="mb-0 searchLocation d-flex">
                  {item?.location}<img src="/images/closeSmall.svg" name={item?.location} onClick={removeValue}></img>
                </p>
              </div>
            )
              }
            </div>
            <div className="d-flex mt-4">
              <div className="border veg ps-2 pe-2 pt-1 pb-1 ">
                <p className="mb-0 d-flex">
                  <img src="/images/veg.svg" className="me-1"></img>Veg
                </p>
              </div>
              <div className="border nonveg ms-2 ps-2 pe-2 pt-1 pb-1">
                <p className="mb-0 d-flex">
                  <img src="/images/nonVeg.svg" className="me-1"></img>Non-Veg
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="rangePrice">
                <label htmlFor="customRange1" className="form-label">
                  Price Range
                </label>
                <Slider
                  min={300} 
                  max={1000}
                  step={10} 
                  value={priceRange} 
                  onChange={handleSliderChange} 
                  tooltip={{
                    open: false, 
                  }}
                />
                <div className="d-flex">
                  <p className="w-50 mb-0">
                    {"\u20B9"}
                    {priceRange}
                  </p>
                  <p className="w-50 mb-0 text-end">{"\u20B9"}1000</p>
                </div>
              </div>
              <div className="rangePrice mt-3">
      <label htmlFor="customRange1" className="form-label">
        Overall Pricing
      </label>
      <Slider
        min={300} 
        max={1000} 
        step={10} 
        value={overAllPricing} 
        onChange={handleSliderAllChange} 
        tooltip={{
          open: false,
        }}
      />
      <div className="d-flex">
        <p className="w-50 mb-0">
          {"\u20B9"}
          {overAllPricing}
        </p>
        <p className="w-50 mb-0 text-end">{"\u20B9"}1000</p>
      </div>
    </div>
            </div>
            <div className="mt-4">
              <p className="mb-0 venueLocation">Venue Type</p>
              <div className="border venueSearch pt-1 pb-1 ps-3 pe-1 mt-1">
                <p className="mb-0">Select type of destination</p>
              </div>
              <div className="d-flex mt-2">
                <div className="rounded searchBar">
                  <p className="mb-0 searchLocation d-flex">
                    New Delhi <img src="/images/closeSmall.svg"></img>
                  </p>
                </div>
                <div className="ms-2 rounded searchBar">
                  <p className="mb-0 searchLocation d-flex">
                    Noida <img src="/images/closeSmall.svg"></img>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <p className="me-3 mb-0 text-center">Room Count</p>
              <InputGroup className="w-auto border">
                <Button variant="" onClick={handleMinus}>
                  &minus;
                </Button>
                <FormControl
                  value={countValue}
                  className="text-center"
                  readOnly
                  style={{ maxWidth: "50px" }}
                />
                <Button variant="" onClick={handlePlus}>
                  &#43;
                </Button>
              </InputGroup>
            </div>
            <div className="rating-filter mt-3">
              <h5 className="rating-title mb-2">Rating/Reviews</h5>
              <div className="stars">
                <i className="fa fa-star filled-star"></i>
                <i className="fa fa-star filled-star"></i>
                <i className="fa fa-star filled-star"></i>
                <i className="fa fa-star filled-star"></i>
                <i className="fa fa-star empty-star"></i>
              </div>
              <div className="buttons d-flex justify-content-end mt-3">
                <button className="btn clear-btn border clearAll">
                  Clear All
                </button>
                <button className="btn apply-btn border applyFilter">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="venueCard d-flex flex-wrap">
        {(data && data.length > 0 ? data : sortedData)?.map((item, index) => (
            <div className="venueContainer col-md-4 col-sm-12 col-12">
              <div className="venuesList">
                <div>
                  <img src={`${item?.imageUrl}`} className="venueImage"></img>
                </div>
                <div>
                  <div className="d-flex justify-content-between ps-3 pe-3 pt-3">
                    <p className="mb-0 venueName">{item?.name}</p>
                    <p className="mb-0 venueRating">
                      <img src="/images/kidStar.svg" className="me-1"></img>
                      {item?.rating}
                    </p>
                  </div>
                  <div className="ps-3 pe-3 pt-2">
                    <p className="mb-0 venueLocation d-flex">
                      <img src="/images/location.svg" className="me-1"></img>
                      {item?.location}
                    </p>
                    <p className="mb-0 mt-1 venuePriceRange d-flex">
                      <img src="/images/fastfood.svg" className="me-1"></img>
                      {item?.priceRange}
                      <span className="ms-1 perPlate">per-plate</span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex venueDetails justify-content-around pe-2 pt-2 pb-2">
                      <div className="detailsItem text-center">
                        <p className="mb-0">{item?.amenities?.[0]}</p>
                      </div>
                      <div className="detailsItem text-center">
                        <p className="mb-0">{item?.amenities?.[1]}</p>
                      </div>
                      <div className="detailsItem text-center">
                        <p className="mb-0">{item?.amenities?.[2]}</p>
                      </div>
                    </div>
                    <div className="viewDetailsBtn">
                      <button className="btn custom-button">
                        <p className="mb-0">View Details</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mandupp;
