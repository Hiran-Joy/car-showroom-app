import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewCars = () => {
    const [cardata, changeData] = useState(
[
  {
    "carId": "CAR101",
    "brand": "BMW",
    "model": "X5",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "price": "9500000",
    "color": "Black",
    "year": 2024,
    "image": "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
    "description": "Luxury SUV with premium features."
  },
  {
    "carId": "CAR102",
    "brand": "Mercedes-Benz",
    "model": "C-Class",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "price": "6200000",
    "color": "White",
    "year": 2023,
    "image": "https://img.magnific.com/premium-vector/blue-car-flat-style-illustration-isolated-white-background_108231-795.jpg?semt=ais_hybrid&w=740&q=80",
    "description": "Premium executive sedan."
  },
  {
    "carId": "CAR103",
    "brand": "Audi",
    "model": "A6",
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "price": "6800000",
    "color": "Grey",
    "year": 2024,
    "image": "https://imgd.aeplcdn.com/370x208/n/cw/ec/200003/gravite-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    "description": "Luxury sedan with advanced technology."
  },
  {
    "carId": "CAR104",
    "brand": "Toyota",
    "model": "Fortuner",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "price": "5200000",
    "color": "Silver",
    "year": 2023,
    "image": "https://www.shutterstock.com/image-photo/car-running-on-road-city-260nw-2647951177.jpg",
    "description": "Powerful SUV suitable for long journeys."
  },
  {
    "carId": "CAR105",
    "brand": "Hyundai",
    "model": "Creta",
    "fuelType": "Petrol",
    "transmission": "Manual",
    "price": "1800000",
    "color": "Blue",
    "year": 2024,
    "image": "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/NissanIntelligentChoice/4-Website-Page-1500x664-241224.jpg.ximg.l_full_m.smart.jpg",
    "description": "Popular compact SUV."
  },
  {
    "carId": "CAR106",
    "brand": "Kia",
    "model": "Seltos",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "price": "2100000",
    "color": "Red",
    "year": 2024,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69-Ae9ceQL4O20-S2PEmSfMXLtrwOsd1Im0nPE-EMJxPABXPybFRRXujd&s=10",
    "description": "Stylish SUV with modern features."
  },
  {
    "carId": "CAR107",
    "brand": "Mahindra",
    "model": "XUV700",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "price": "2600000",
    "color": "Black",
    "year": 2024,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q6MVmwKmu0PHS3tpScJ4G6sFFEkZ-RlyP6OSlT6xgPoehdFBYOVcePM&s=10",
    "description": "Feature-rich family SUV."
  },
  {
    "carId": "CAR108",
    "brand": "BMW",
    "model": "X5",
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "price": "2400000",
    "color": "Orange",
    "year": 2023,
    "image": "https://static.vecteezy.com/system/resources/thumbnails/026/175/422/small/sport-car-model-photo.jpg",
    "description": "Bold SUV with excellent safety."
  }
]
    )
  return (
    <div>
        <NavigationBar/>
           <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <div className="row g-3">
                {cardata.map(
                  (value,index)=>{
                    return(
                      <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                        key={index}>
                      

                     <div class="card">
                                            <img src= {value.image} height="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">Brand: {value.brand}</h6>
                                                <h6 class="card-title">Model: {value.model}</h6>
                                                <h6 class="card-title">Fuel Type: {value.fuelType}</h6>
                                                <h6 class="card-title">Price: {value.price}</h6>
                                                <h6 class="card-title">Color: {value.color}</h6>
                                                <h6 class="card-title">Manufacturing Year: {value.year}</h6>
                                                <a href="#" class="btn btn-success">View</a>
                                            </div>
                                        </div>
                </div>
               
 

                    )
                  }
                )}
                

                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<button className="btn btn-warning">Add To Cart</button>
                </div>
            </div>
        </div>
      </div>
      </div>
  )
}
export default ViewCars
