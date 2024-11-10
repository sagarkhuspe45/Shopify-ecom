import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faDollarSign, faPercentage, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <>
    <div className="container">
      <div className="row services">
        <div className="card services" style={{ width: "15rem"}}>
          <div className="card-body services">
            <h5 className="card-title">
            <FontAwesomeIcon icon={faTruck}/>&nbsp;
              free Delivery
              </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              &nbsp;
              Orders from all items
            </h6>
          </div>
        </div>

        <div className="card services" style={{ width: "15rem" }}>
          <div className="card-body">
            <h5 className="card-title">
            <FontAwesomeIcon icon={faDollarSign}/>&nbsp;
              Return & Refund</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Money back gurantee
            </h6>
          </div>
        </div>

        <div className="card services" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">
            <FontAwesomeIcon icon={faPercentage}/>&nbsp;
              Member Discount</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              On order over $999
            </h6>
          </div>
        </div>

        <div className="card services" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">
            <FontAwesomeIcon icon={faContactCard}/>&nbsp;
              Support 24/7</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Contact us 24 hours a day
            </h6>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
