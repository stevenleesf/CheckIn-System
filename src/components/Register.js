import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import TutorialDataService from "../services/CustomerService";


const Register= props => {
  const initialTutorialState = {
    locationname: "",
    
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      
      locationname: tutorial.locationname,
     
    };

  TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          
          locationname: response.data.locationname,
          
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };

    return (
    
    <div>
        {submitted ? (
        <div className="container p-3 my-3 border">
          <h4>You submitted successfully!</h4>
        </div>
      ) :(
        <div className="container p-3 my-3 border">
            <h2 >Register</h2>
            <InputGroup className="mb-4">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Location Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    type="text"
                    id="locationname"
                    required
                    value={tutorial.locationname}
                    onChange={handleInputChange}
                    name="locationname"
                    placeholder="Full Name"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <Button variant="outline-secondary" onClick={saveTutorial}  >Register Location</Button>


        </div>
      )}


        
    </div>
    )
}

export default Register
