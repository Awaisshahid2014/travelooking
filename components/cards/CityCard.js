import Colors from '@/utils/Colors';
import Image from 'next/image';
import React, { useState } from 'react';

const CityCard = ({ city, propertyType, totalProperties, hotelName, price, rating }) => {
  const [ratingStatus, setRatingstatus] = useState(rating);
  const statusRating =
    ratingStatus < 5
      ? 'Poor'
      : ratingStatus >= 5 && ratingStatus < 5.9
      ? 'Good'
      : ratingStatus >= 6 && ratingStatus < 8
      ? 'Average'
      : 'Excellent';
  return (
    <>
      <div
        className="w-100 position-relative p-3"
        style={{ aspectRatio: '16/9', borderRadius: '10px', overflow: 'hidden' }}
      >
        <Image
          src="/images/5bd3ffe21320e-wallpaper-preview.jpg"
          alt="city image"
          fill
          style={{ position: 'absolute' }}
        />
        {city && (
          <div className="position-absolute" style={{ bottom: '10%', left: '5%' }}>
            <h3 className="text-white">
              <b>{city}</b>
            </h3>
            <span className="text-white">25 properties</span>
          </div>
        )}
      </div>
      {propertyType && totalProperties && (
        <div className="row pt-2">
          <span>
            <b>{propertyType}</b>
          </span>
          <span style={{ color: 'grey' }}>
            {totalProperties} {propertyType}
          </span>
        </div>
      )}
      {hotelName && (
        <div className="row pt-2">
          <span>
            <b>{hotelName}</b>
          </span>
          <span style={{ color: 'grey' }}>{city}</span>
          <span style={{ color: 'grey' }}>Starting from ${price}</span>
          <div className="d-flex justify-content-start">
            <div
              className="d-flex align-item-center justify-content-center text-white"
              style={{ width: '2rem', background: Colors.main_primary }}
            >
              {rating}
            </div>
            <span className="px-2">{statusRating}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CityCard;
