import React from 'react';

const ChineseMenu = () => {
    return (
        <>
            <div className="mb-5">
            <h3 className="text-white">Here are some special Chinese Items for you</h3>
            </div> 
            <div className="row row-cols-1 row-cols-md-4 g-4 w-75 mx-auto">
        <div className="col">
          <div className="card h-100">
            <img
              style={{ height: "400px" }}
              src={require("../../resources/img/Chinese/cabbage.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                 Spicy Cabbage
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
              src={require("../../resources/img/Chinese/chinese-ramen.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Chinese Ramen
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
              src={require("../../resources/img/Chinese/duck.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Roasted Duck
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
              src={require("../../resources/img/Chinese/dumplings.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
               Dumplings
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
              src={require("../../resources/img/Chinese/fried-rice.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Fried Rice
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
              src={require("../../resources/img/Chinese/pork.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Chinese Pork
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
              src={require("../../resources/img/Chinese/shanghai-lobster.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
               Shanghai Lobster
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
              src={require("../../resources/img/Chinese/spicy-vegetables.jpg")}
              className="card-img-top order-now-menu"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ fontSize: "30px" }}
                className="card-title text-danger text-center"
              >
                Spicy Vegetable
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

export default ChineseMenu;