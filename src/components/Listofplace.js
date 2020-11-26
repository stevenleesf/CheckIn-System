import React, { useState, useEffect } from 'react'
import TutorialDataService from "../services/CustomerService";
import { Link } from "react-router-dom";

const Listofplace = () => {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);


    useEffect(() => {
        retrieveTutorials();
    }, []);

    const retrieveTutorials = () => {
        TutorialDataService.getAll()
            .then(response => {
                setTutorials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);

    };

    return (
        <div className="list-group">

            <div className="container p-3 my-3 border">
                <h4>Location List</h4>

                <ul className="list-group">
                    {tutorials &&
                        tutorials.map((tutorial, index) => (
                            <li

                                onClick={() => setActiveTutorial(tutorial, index)}
                                key={index}
                            >
                                {tutorial.locationname}
                            </li>
                        ))}
                </ul>


            </div>
            <div className="container p-3 my-3 border">
                {currentTutorial ? (
                    <div>
                        <h4>Information</h4>
                        <div>
                            <label>
                                <strong>Location:</strong>
                            </label>{" "}
                            {currentTutorial.locationname}
                        </div>
                        <div>
                            <label>
                                <strong>ID:</strong>
                            </label>{" "}
                            {currentTutorial.id}
                        </div>


                        <Link
                            to={"/createcheckin/" + currentTutorial.id}
                            className="btn btn-outline-dark btn--medium"
                        >
                            Check In
                         </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Button...</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Listofplace
