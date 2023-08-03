'use client';
import React, { useState } from 'react';
import CustomLayout from '../customlayout/CustomLayout';
import HotelCard from '@/components/cards/HotelCard';
import classes from '../modulestyles/SearchedHotels.module.css';

const SearchedHotels = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  return (
    <CustomLayout>
      <div style={{ padding: '10px 3rem 5rem 3rem' }}>
        <div className="col-md-12 ">
          <div className="row">
            <div className="col-md-3 mb-2">
              <div className="bg-warning rounded-1 px-3 py-3">
                <span className="d-block fw-bold mb-2 h5">Search</span>
                <div className="w-100 mb-2">
                  <label className="d-block fw-bold small py-1" htmlFor="destination">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    placeholder="Your destination"
                    className="w-100 p-2 border-0 rounded-1 small"
                  />
                </div>
                <div className="w-100 mb-2">
                  <label className="d-block fw-bold small py-1" htmlFor="checkindate">
                    Check-in date
                  </label>
                  <input
                    id="checkindate"
                    type="text"
                    name="destination"
                    disabled
                    className="w-100 p-2 border-0 bg-white rounded-1 small"
                    value={'sdfk'}
                  />
                </div>
                <div className="w-100">
                  <span className="d-block fw-bold small py-1">Options</span>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="w-75 small">Min price</span>
                    <input
                      type="number"
                      value={2}
                      name="min price"
                      className={`w-25 p-1 border-0 rounded-1 small ${classes.inputNumberArrowStyle}`}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="w-75 small">Max price</span>
                    <input
                      type="number"
                      value={2}
                      name="max price"
                      className={`w-25 p-1 border-0 rounded-1 small ${classes.inputNumberArrowStyle}`}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="w-75 small">Adult</span>
                    <input
                      type="number"
                      value={2}
                      name="Adult"
                      className={`w-25 p-1 border-0 rounded-1 small ${classes.inputNumberArrowStyle}`}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="w-75 small">Children</span>
                    <input
                      type="number"
                      value={2}
                      name="Children"
                      className={`w-25 p-1 border-0 rounded-1 small ${classes.inputNumberArrowStyle}`}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <span className="w-75 small">Room</span>
                    <input
                      type="number"
                      value={2}
                      name="Room"
                      className={`w-25 p-1 border-0 rounded-1 small ${classes.inputNumberArrowStyle}`}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <button className="btn btn-block btn-success">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 mb-2">
              <HotelCard image={'/images/hotelroom.jpg'} />
              <HotelCard image={'/images/hotelroom1.jpg'} />
              <HotelCard image={'/images/hotelroom3.jpg'} />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default SearchedHotels;
