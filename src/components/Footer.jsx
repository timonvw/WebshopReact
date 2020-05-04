import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class Footer extends React.Component 
{
    render() 
    {
      return (
        <Navbar collapseOnSelect style={{  marginTop:'50px'}} sticky="bottom" expand="lg" bg="light" variant="light">
            <Navbar.Text>who needs a footer.</Navbar.Text>
        </Navbar>
      );
    }
}