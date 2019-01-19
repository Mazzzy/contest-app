import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ContestForm = (props) => {
  return (
    <form className="form form-horizontal" id="addContestForm" onSubmit={props.addContest}>
    <div className="row">
    <h3 className="centerAlign">Add Your Contest</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Contest: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Contest"
              name="contestName"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="contestDesc"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default ContestForm;