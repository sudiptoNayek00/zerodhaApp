import React from "react";
import { Link } from "react-router-dom";
import "./CreateTicket.css";

function CreateTicket() {
  return (
    <div className="container my-4">
      <h5 className="text-muted mb-4">
        To create a ticket, select a relevant topic
      </h5>
      <div className="row mb-4">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h6 className="mb-2">
            <i className="fas fa-plus-circle me-2"></i>
            Account Opening
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">Resident individual</Link>
            </li>
            <li>
              <Link to="#">Minor</Link>
            </li>
            <li>
              <Link to="#">Non Resident Indian (NRI)</Link>
            </li>
            <li>
              <Link to="#">Company, Partnership, HUF and LLP</Link>
            </li>
            <li>
              <Link to="#">Glossary</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h6 className="mb-2">
            <i className="fas fa-user-alt me-2"></i>
            Your Zerodha Account
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">Your Profile</Link>
            </li>
            <li>
              <Link to="#">Account modification</Link>
            </li>
            <li>
              <Link to="#">
                Client Master Report (CMR) and Depository Participant (DP)
              </Link>
            </li>
            <li>
              <Link to="#">Nomination</Link>
            </li>
            <li>
              <Link to="#">Transfer and conversion of securities</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <h6 className="mb-2">
            <i className="fas fa-mountain me-2"></i>
            Kite
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">IPO</Link>
            </li>
            <li>
              <Link to="#">Trading FAQs</Link>
            </li>
            <li>
              <Link to="#">Margin Trading Facility (MTF) and Margins</Link>
            </li>
            <li>
              <Link to="#">Charts and orders</Link>
            </li>
            <li>
              <Link to="#">Alerts and Nudges</Link>
            </li>
            <li>
              <Link to="#">General</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md mb-4 mb-md-0">
          <h6 className="mb-2">
            <i className="fas fa-credit-card me-2"></i>
            Funds
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">Add money</Link>
            </li>
            <li>
              <Link to="#">Withdraw money</Link>
            </li>
            <li>
              <Link to="#">Add bank accounts</Link>
            </li>
            <li>
              <Link to="#">eMandates</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md mb-4 mb-md-0">
          <h6 className="mb-2">
            <i className="fas fa-circle-notch me-2"></i>
            Console
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">Portfolio</Link>
            </li>
            <li>
              <Link to="#">Corporate actions</Link>
            </li>
            <li>
              <Link to="#">Funds statement</Link>
            </li>
            <li>
              <Link to="#">Reports</Link>
            </li>
            <li>
              <Link to="#">Profile</Link>
            </li>
            <li>
              <Link to="#">Segments</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h6 className="mb-2">
            <i className="fas fa-coins me-2"></i>
            Coin
          </h6>
          <ul className="list-unstyled ps-3">
            <li>
              <Link to="#">Understanding mutual funds and Coin</Link>
            </li>
            <li>
              <Link to="#">Coin app</Link>
            </li>
            <li>
              <Link to="#">Coin web</Link>
            </li>
            <li>
              <Link to="#">Transactions and reports</Link>
            </li>
            <li>
              <Link to="#">National Pension Scheme (NPS)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
