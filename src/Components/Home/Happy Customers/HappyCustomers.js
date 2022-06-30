import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HappyCustomers = () => {
  return (
    <>
     <div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-3">
      <div className="d-flex align-items-center">
       <img style={{width: '100px', borderRadius: '50%'}} src={require('../../../resources/img/customers/alif.jpg')} alt="" />
       <h5>Alif Nur Kishan</h5>
      </div>
      {/* <p>Excellent Service</p> */}
      <FontAwesomeIcon icon="fa-solid fa-star" />
    </div>
    <div className="col-sm-12 col-md-3">col</div>
    <div className="col-sm-12 col-md-3">col</div>
    <div className="col-sm-12 col-md-3">col</div>
  </div>
  {/* <div className="row">
    <div className="col-8">col-8</div>
    <div className="col-4">col-4</div>
  </div> */}
</div>
    </>
  );
};

export default HappyCustomers;
