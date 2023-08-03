'use client';
import React, { useState } from 'react';
import { FaBed, FaCarAlt, FaPlane } from 'react-icons/fa';

const PrimaryHeader = ({ padding, height, background }) => {
  const [pagename, setPagename] = useState('stays');
  return (
    <div className="row" style={{ padding: padding, height: height, background: background }}>
      <div className="d-flex alig-items-center justify-content-between py-2">
        <div>
          <p className="text-white">Travelooking</p>
        </div>
        <div>
          <button className="mx-1 px-2  border-0">Register</button>
          <button className="px-2 bg-default border-0">Login</button>
        </div>
      </div>
      <div className="d-flex alig-items-center justify-content-start py-2">
        <div
          className={pagename == 'stays' ? 'me-5 p-2 cursor-pointer border' : 'me-5 p-2'}
          style={{ border: 'none', borderRadius: '20px' }}
          onClick={() => setPagename('stays')}
        >
          <FaBed color="#FFFFFF" />
          <span className="px-2 text-white" style={{ cursor: 'pointer' }}>
            Stays
          </span>
        </div>
        <div
          className={pagename == 'flights' ? 'me-5 p-2 cursor-pointer border' : 'me-5 p-2'}
          style={{ border: 'none', borderRadius: '20px' }}
          onClick={() => setPagename('flights')}
        >
          <FaPlane color="#FFFFFF" />
          <span className="px-2 text-white" style={{ cursor: 'pointer' }}>
            Flights
          </span>
        </div>
        <div
          className={pagename == 'car rentals' ? 'me-5 p-2 cursor-pointer border' : 'me-5 p-2'}
          style={{ border: 'none', borderRadius: '20px' }}
          onClick={() => setPagename('car rentals')}
        >
          <FaCarAlt color="#FFFFFF" />
          <span className="px-2 text-white" style={{ cursor: 'pointer' }}>
            Car rentals
          </span>
        </div>
        <div
          className={pagename == 'attractions' ? 'me-5 p-2 cursor-pointer border' : 'me-5 p-2'}
          style={{ border: 'none', borderRadius: '20px' }}
          onClick={() => setPagename('attractions')}
        >
          <FaBed color="#FFFFFF" />
          <span className="px-2 text-white" style={{ cursor: 'pointer' }}>
            Attractions
          </span>
        </div>
        <div
          className={pagename == 'airport taxis' ? 'me-5 p-2 cursor-pointer border' : 'me-5 p-2'}
          style={{ border: 'none', borderRadius: '20px' }}
          onClick={() => setPagename('airport taxis')}
        >
          <FaCarAlt color="#FFFFFF" />
          <span className="px-2 text-white" style={{ cursor: 'pointer' }}>
            Airport taxis
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeader;
