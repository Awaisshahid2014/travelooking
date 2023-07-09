'use client';
import React, { useState } from 'react';
import CustomLayout from '../customlayout/CustomLayout';
import Colors from '@/utils/Colors';
import { MdClose } from 'react-icons/md';
import CityCard from '@/components/cards/CityCard';
import { useRouter } from 'next/navigation';

const MainView = () => {
  const router = useRouter();
  const [showPannel, setShowPannel] = useState(false);
  const [searchData, setSearchData] = useState({
    city: '',
    firstDate: null,
    secondDate: null,
    adults: 0,
    children: 0,
    rooms: 0,
  });

  console.log(searchData, 'searchData searchData');

  const handleSearch = () => {
    console.log('clicked');
    router.push('../SearchedHotels');
  };

  return (
    <CustomLayout>
      <div>
        <div style={{ padding: '10px 3rem 5rem 3rem', background: Colors.main_primary }}>
          <h4 className="text-white">A Lifttime of discount? It&apos;s Genius.</h4>
          <p className="text-white">
            Get rewarded for your travels - unlock instant savings of 10% of more with a free booking account
          </p>
          <button className="border-0 p-2 text-white bg-primary">Sign in / Register</button>
        </div>
        <div style={{ position: 'relative' }}>
          <div
            className="py-2 bg-white position-absolute"
            style={{
              border: `3px solid ${Colors.main_orange}`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '94%',
              zIndex: '1',
              borderRadius: '5px',
            }}
          >
            <div className="row pt-2 px-2">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-2">
                <input
                  type="search"
                  placeholder="Where are you going?"
                  className="border-0 p-2 w-100"
                  onChange={(e) => setSearchData({ city: e.target.value })}
                  value={searchData.city}
                />
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-2">
                <div className="d-flex justify-content-between">
                  <div className="w-100 me-1">
                    <input
                      type="date"
                      name="first_date"
                      className="border-0 p-2 w-100"
                      onChange={(e) => setSearchData({ firstDate: e.target.value })}
                      value={searchData.firstDate}
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="date"
                      name="second_date"
                      className="border-0 p-2 w-100"
                      onChange={(e) => setSearchData({ secondDate: e.target.value })}
                      value={searchData.secondDate}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-2 position-relative">
                <div className="h-100 d-flex align-items-center " onClick={() => setShowPannel(true)}>
                  <span className="opacity-25">2 adult - 0 children - 1 room</span>
                </div>
                {showPannel == true && (
                  <div
                    className="p-2 shadow-lg"
                    style={{
                      background: Colors.main_white,
                      height: 'auto',
                      width: '60%',
                      borderRadius: '10px',
                      position: 'absolute',
                      marginTop: '1rem',
                      zIndex: '3',
                    }}
                  >
                    <div className="d-flex justify-content-end py-1 px-2">
                      <div onClick={() => setShowPannel(false)}>
                        <MdClose />
                      </div>
                    </div>
                    <div className="w-100 ">
                      <div className="d-flex justify-content-between align-items-center py-2 px-2">
                        <div>
                          <span>Adults</span>
                        </div>
                        <div className="d-flex">
                          <button className="px-2 mx-1 border-primary">+</button>
                          <span className="px-2">2</span>
                          <button className="px-2 ms-1 border-primary">-</button>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 ">
                      <div className="d-flex justify-content-between align-items-center py-2 px-2">
                        <div>
                          <span>Children</span>
                        </div>
                        <div className="d-flex">
                          <button className="px-2 mx-1 border-primary">+</button>
                          <span className="px-2">2</span>
                          <button className="px-2 ms-1 border-primary">-</button>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 ">
                      <div className="d-flex justify-content-between align-items-center py-2 px-2">
                        <div>
                          <span>Rooms</span>
                        </div>
                        <div className="d-flex">
                          <button className="px-2 mx-1 border-primary">+</button>
                          <span className="px-2">2</span>
                          <button className="px-2 ms-1 border-primary">-</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 mb-2">
                <div className="d-flex justify-content-end">
                  <button className="bg-primary p-2 w-100" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row" style={{ padding: '4rem 3rem 2rem 3rem' }}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-2">
              <CityCard city={'Madrid'} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-2">
              <CityCard city={'London'} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-2">
              <CityCard city={'Austin'} />
            </div>
          </div>
          <div className="row" style={{ padding: '0rem 3rem 2rem 3rem' }}>
            <h4 className="pb-4">Browse for by property type</h4>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard propertyType={'Hotels'} totalProperties={'56'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard propertyType={'Apartments'} totalProperties={'24'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard propertyType={'Resorts'} totalProperties={'46'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard propertyType={'Villas'} totalProperties={'30'} />
            </div>
          </div>
          <div className="row" style={{ padding: '0rem 3rem 2rem 3rem' }}>
            <h4 className="pb-4">Home guests love</h4>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard hotelName={'Hotel State Miasto'} city={'Madrid'} price={'120'} rating={'8.9'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard hotelName={'Maritim Arte Hotel'} city={'London'} price={'130'} rating={'10'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard hotelName={'ibis Hotel Paris'} city={'Paris'} price={'100'} rating={'5.9'} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 mb-2">
              <CityCard hotelName={'Apart Hotel Hampton'} city={'Rome'} price={'140'} rating={'6.0'} />
            </div>
          </div>
          <div className="row p-5" style={{ background: Colors.main_primary }}>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column text-white">
                <center>
                  <h2>Save time, save money!</h2>
                  <p style={{ fontSize: '15px', padding: '1rem 0px 0.5rem 0px' }}>
                    Sign up and we&apos;ll send the best deals to you
                  </p>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="mx-2"
                      style={{
                        height: '50px',
                        width: '300px',
                        padding: '10px',
                        fontSize: '14px',
                        borderRadius: '7px',
                        border: 'none',
                      }}
                    />
                    <button
                      style={{
                        height: '50px',
                        padding: '10px',
                        fontSize: '18px',
                        borderRadius: '7px',
                      }}
                      className="bg-primary border-0 text-white"
                    >
                      Subscribe
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default MainView;
