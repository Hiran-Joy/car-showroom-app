import React from 'react'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">  {/* className instead of class */}
            <div className="container-fluid">  {/* className instead of class */}
                <a className="navbar-brand" href="#">Navbar</a>  {/* className instead of class */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>  {/* className instead of class */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">  {/* className instead of class */}
                    <div className="navbar-nav">  {/* className instead of class */}
                        <a className="nav-link active" aria-current="page" href="/">AddCar</a>
                        <a className="nav-link" href="/search">SearchCar</a>
                        <a className="nav-link" href="/delete">DeleteCar</a>
                        <a className="nav-link" href="/view">ViewCars</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar