'use client';
import Colors from '@/utils/Colors';
import Image from 'next/image';
import React from 'react';

const HotelCard = ({ image }) => {
  return (
    <div className="p-2 rounded-1 mb-2" style={{ border: '1px solid grey' }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3 position-relative"
            style={{ height: 'auto', borderRadius: '5px', overflow: 'hidden' }}
          >
            <Image src={image} layout="fill" style={{ position: 'absolute' }} alt="hotel room pic" />
          </div>
          <div className="col-md-9 ps-4">
            <div className="row ">
              <div className="col-md-8 pt-1">
                <h5 style={{ fontWeight: 800, color: Colors.main_primary }}>Austin David Hotel</h5>
              </div>
              <div className="col-md-4 pt-1">
                <div className="float-end">
                  <div className="d-flex justify-content-between">
                    <span className="px-2">Excellent</span>
                    <div
                      style={{
                        padding: '0px 4px',
                        background: Colors.main_primary,
                        color: Colors.main_white,
                      }}
                    >
                      8.9
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <span className="small d-block py-1">700m from center</span>
                <span
                  className="small"
                  style={{ background: 'green', padding: '3px', color: Colors.main_white, borderRadius: '5px' }}
                >
                  Free airport taxi
                </span>
              </div>
            </div>
            {/*  */}
            <div className="row ">
              <div className="col-md-8">
                <span className="py-1 d-block" style={{ fontWeight: 600 }}>
                  Experience world-class service
                </span>
                <div>
                  <p className="lh-sm small">
                    Located just off Royal Victoria Square and with the Excel Center a few hundred yards away, this
                    pent...
                  </p>
                </div>
                <div>
                  <p className="text-success fw-bold">Free cancellation</p>
                </div>
                <div>
                  <p className="text-success small">You can cancel later, so lock in this great price today!</p>
                </div>
              </div>
              <div className="col-md-4 position-relative">
                <div className="d-flex flex-column position-absolute" style={{ right: '5%', bottom: '5%' }}>
                  <div className="d-flex justify-content-end">
                    <span className="px-2 h2">$189</span>
                  </div>
                  <div className="d-flex justify-content-end mb-1 ">
                    <span className="px-2 py-2 small text-muted">Includes taxes and fees</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="px-2 btn btn-lg btn-primary border-0"
                      style={{ fontSize: '14px', background: Colors.main_primary_btn }}
                    >
                      See Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
