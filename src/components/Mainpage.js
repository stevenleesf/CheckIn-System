import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import TutorialDataService from "../services/CustomerService";

const Mainpage = props => {
    const initialTutorialState = {
        id: null
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const getTutorial = id => {
        TutorialDataService.getOne(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);
    return (
        <div>
            <div className="container p-3 my-3 border">
                <h1>{currentTutorial.locationname}</h1>
                <br></br>
                <p>Welcome to Checkin Application, Develop for {currentTutorial.locationname}</p>
                <Link to={`/createcheckin/${currentTutorial.id}`} className='btn-link'>
                    <Button variant="outline-secondary" >Check-In</Button>
                </Link>

            </div>
        </div>
    )
}

export default Mainpage
