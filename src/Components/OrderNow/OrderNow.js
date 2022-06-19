import React from "react";
import "./OrderNow.css";

const OrderNow = () => {
  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h2 className="text-success">Order Now</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/orderNow/burger.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Burger
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate eveniet blanditiis libero alias vero repellendus
                magnam quam amet rerum mollitia!
              </p>
            </div>
            <button type="button" className="btn btn-outline-danger w-50 mx-auto">Order Now</button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/orderNow/pizza.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Pizza
              </h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                rerum eos corrupti ipsam molestias repellendus, labore incidunt
                expedita magni ullam.
              </p>
            </div>
            <button type="button" className="btn btn-outline-danger w-50 mx-auto">Order Now</button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/orderNow/noodles.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Noodles
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto doloremque, consequuntur asperiores blanditiis
                reprehenderit magni atque vero doloribus quam! At.
              </p>
            </div>
            <button type="button" className="btn btn-outline-danger w-50 mx-auto">Order Now</button>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/orderNow/sandwitch.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Sandwitch
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                dignissimos eos illum possimus dolor, fugiat esse atque eligendi
                aliquam quibusdam.
              </p>
            </div>
            <button type="button" className="btn btn-outline-danger w-50 mx-auto">Order Now</button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default OrderNow;
