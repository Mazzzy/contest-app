import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import ContestForm from './ContestForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddContest = this.toggleAddContest.bind(this);
    this.addContest = this.addContest.bind(this);
  }

  toggleAddContest(e){
    e.preventDefault();
     this.props.mappedToggleAddContest();
  }

  addContest(e){
      e.preventDefault();
      const form = document.getElementById('addContestForm');
      if(form.contestName.value !== ""  && form.contestDesc.value !== ""){
        const data = new FormData();
        data.append('contestName', form.contestName.value);
        data.append('contestDesc', form.contestDesc.value);
        data.append('startDate', form.startDate.value);
        data.append('endDate', form.endDate.value);
        data.append('entrant', form.entrant.value);
        data.append('coordinates', form.coordinates.value);
        this.props.mappedAddContest(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Contest Admin App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddContest}>
         <NavItem eventKey={1}>Add Contest</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddContest &&
    <ContestForm addContest={this.addContest} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}