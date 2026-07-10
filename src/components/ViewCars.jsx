import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ViewCars = () => {
  const [cardata, changeData] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json"
      )
      .then(
        (response) => {
            changeData(response.data)//here data is a built in one not vname
        }
      )
      .catch();
  };

  useEffect(

    () => {
        fetchData()
    },[]
  )

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {cardata.map((value, index) => {
                return (
                  <div
                    className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                    key={index}
                  >
                    <div class="card">
                      <img
                        src={value.image}
                        height="300px"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title">Brand: {value.brand}</h6>
                        <h6 class="card-title">Model: {value.model}</h6>
                        <h6 class="card-title">Fuel Type: {value.fuelType}</h6>
                        <h6 class="card-title">Price: {value.price}</h6>
                        <h6 class="card-title">Color: {value.color}</h6>
                        <h6 class="card-title">
                          Manufacturing Year: {value.year}
                        </h6>
                        <a href="#" class="btn btn-success">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCars;
