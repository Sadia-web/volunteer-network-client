import React from 'react';
import './EventRegistration.css';
import logo from '../../logos/logo.png';
import { Link } from 'react-router-dom';

const EventRegistration = () => {
    return (

        <div className="container event-registration">
            <a href="/home"><img src={logo} alt="" className="form-logo" /></a>

            <form action="" className="registration-form bg-white">
                <h3>Register as a Volunteer</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full Name" id="" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username or Email" id="" />
                </div>
                <div className="form-group">
                    <input type="date" className="form-control" placeholder="Date" id="" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Description" id="" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Organize books at the library." id="" />
                </div>

                {/* <button type="submit" className="btn btn-primary col-md-12">Registration</button> */}
                <Link to='/latestEvent'><button type="submit" className="btn btn-primary col-md-12">Registration</button></Link>
            </form>

        </div>

    );
};

export default EventRegistration;