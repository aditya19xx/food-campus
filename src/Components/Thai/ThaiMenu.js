import React from 'react';

const ThaiMenu = () => {
    return (
        <>
            <div className="mb-5">
            <h3 className="text-white">Here are some special Thai Items for you</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 w-75 mx-auto">
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-egg-net.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                 Egg Net
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
              src={require("../../resources/img/Thai/thai-chili-fried-rice.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Chili Fried Rice
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
              src={require("../../resources/img/Thai/thai-curry.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Thai Curry
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
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-noodles.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Thai Noodles
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
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-basil.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Thai Basil
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
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-soup.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Thai Soup
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
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-spricy-prawn.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Spicy Prawn
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
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Thai/thai-duck-breast.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Duck Breast
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
      </div>
        </>
    );
};

export default ThaiMenu;