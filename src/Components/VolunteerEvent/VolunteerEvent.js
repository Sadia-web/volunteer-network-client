import React, { useEffect, useState } from 'react';
import './VolunteerEvent.css';
import fakeData from '../fakeData/fakeData';
import { Link, useParams } from 'react-router-dom';

const VolunteerEvent = () => {
    const { _id } = useParams();

    // const event = allEvent;
    const [works, setWorks] = useState([])

    // load events data from API
    useEffect(() => {
        fetch('https://thawing-wildwood-78896.herokuapp.com/works')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])

    return (
        <div className="row">
            {
                fakeData.map(work =>
                    <div className="col-md-3" key={work._id}>
                        <img src={work.img} className="card-img" alt="..." />
                        <Link to={`/eventRegistration/${work._id}`}><h3 className="bg-primary text-white p-3 rounded">{work.name}</h3></Link>
                    </div>

                )
            }
        </div>
    );
};

export default VolunteerEvent;