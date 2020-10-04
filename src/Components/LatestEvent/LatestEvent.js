import React from 'react';
import Header from '../Header/Header';

const LatestEvent = () => {
    return (
        <div className="container">
            <Header></Header>

            <div className="row card p-5" >
                <div className="col-md-4">
                    <img src="https://i.ibb.co/bQ8CSf8/extra-Volunteer.png" className="card-img" alt="" />
                </div>
                <div className="col-md-4">
                    <h3>Humanity More</h3>
                    <h5>29 sep, 2020</h5>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-light">Cancel</button>
                </div>
                <div className="col-md-4">
                    <img src="https://i.ibb.co/bQ8CSf8/extra-Volunteer.png" className="card-img" alt="" />
                </div>
                <div className="col-md-4">
                    <h3>Humanity More</h3>
                    <h5>29 sep, 2020</h5>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-light">Cancel</button>
                </div>
            </div>

        </div>
    );
};

export default LatestEvent;