import React from 'react';
import './Admin.css';
import logo from '../../logos/logo.png';
import Delete from '../../logos/delete.png';
import user from '../../logos/user.png';
import plus from '../../logos/plus.png';

const Admin = () => {
    return (

        <div className="container-fluid" >
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <a className="navbar-brand" href="/home">
                        <img src={logo} alt="" />
                    </a>

                    <ul className="dashboard-menu ">
                        <p><a href="/admin"> <img src={user} alt="" width="20px"/>Volunteer register list</a></p>
                        <p><a href="/addEvents"> <img src={plus} alt="" width="20px"/>Add event</a></p>
                    </ul>

                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Volunteer Register List</h3>

                    <div className="bg-white p-5">
                        <table class="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Sufi Ahmed</th>
                                    <td>Sufi@gmail.com</td>
                                    <td>22/10/2020</td>
                                    <td>Schools</td>
                                    <td><button className="btn btn-danger"><img src={Delete} alt="" width="20px"/></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Pro Rasel</th>
                                    <td>rasel@gmail.com</td>
                                    <td>12/1/2020</td>
                                    <td>Hospitals</td>
                                    <td><button className="btn btn-danger"><img src={Delete} alt="" width="20px"/></button></td>

                                </tr>
                                <tr>
                                    <th scope="row">Karim </th>
                                    <td>karim@gmail.com</td>
                                    <td>20/12/2020</td>
                                    <td>Roads</td>
                                    <td><button className="btn btn-danger"><img src={Delete} alt="" width="20px"/></button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Admin;