import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import DateTimePicker from 'react-datetime-picker'
import Button from 'react-bootstrap/Button'
import TutorialDataService from "../services/CustomerService";

const Checkin = props => {
    
    const initialTutorialState = {
        locationid: null,
        name: "",
        nric: "",
        temp: "",
        date: null,
        
    };
    const [tutorial, setTutorial] = useState(initialTutorialState);
    const [submitted, setSubmitted] = useState(false);
    const [value, onChange] = useState(new Date());

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });
    };

    const saveTutorial = () => {
        var data = {
            locationid: props.match.params.id,
            name: tutorial.name,
            nric: tutorial.nric,
            temp: tutorial.temp,
            date: value,
            
        };
        TutorialDataService.createcheckin(data.locationid,data)
            .then(response => {
                console.log(data)
                setTutorial({
                    locationid: props.match.params.locationid,
                    name: response.data.name,
                    nric: response.data.nric,
                    temp: response.data.temp,
                    date: response.data.date,

                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    
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



     function DateFuction() {
         onChange();
         

     }
    return (
        <div>
            {submitted ? (
                <div className="container p-3 my-3 border">
                    <h4>You Check-In {currentTutorial.locationname} </h4>
                    <h4>You Check-In successfully!</h4>
                </div>
            ) : (

                    <div className="container p-3 my-3 border">
                        <h2 >Check In</h2>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Full Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                id="name"
                                required
                                value={tutorial.name}
                                onChange={handleInputChange}
                                name="name"
                                placeholder="Full Name"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">NRIC</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                id="nric"
                                required
                                value={tutorial.nric}
                                onChange={handleInputChange}
                                name="nric"
                                placeholder="980120145566"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Body Temperature</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                id="temp"
                                required
                                value={tutorial.temp}
                                onChange={handleInputChange}
                                name="temp"
                                placeholder="Value in Celsius"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Time And Data</InputGroup.Text>
                            </InputGroup.Prepend>
                            <DateTimePicker
                                type="text"
                                id="date"
                                required
                                name="date"
                                format= {"y-MM-dd h:mm:ss a"}
                                onChange={DateFuction}
                                value={value}
                            />
                            <FormControl

                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>

                        <Button variant="outline-secondary" onClick={saveTutorial} >Check-In</Button>


                    </div>
                )}
        </div>
    )
}

export default Checkin
