import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Link } from 'react-router-dom';

export class ModalCreate extends React.Component 
{
  constructor() 
  {
    super();
    this.state = { 
      title: "",
      description: "",
      author: "",
      }
  }

  handleClick = () => {
    this.props.toggle();
    //console.log(this.props.code.title);
  };

  createCode = () => {
    
    fetch('http://ec2-54-82-239-154.compute-1.amazonaws.com:9000/codes/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                    "title": this.state.title,
                    "description": this.state.description,
                    "author": this.state.author
                })
    }).then(res => {
        //sluiten en herladen
        this.handleClick();
        this.props.reloadCodes();
        //window.location.reload(false);
        
    }).catch(err => err);
    
  }


  render() {
    return (
      <div className="modalBackground">
       <Modal.Dialog style={{zIndex:'10', margin: '15% auto'}}>
       <Form>
          <Modal.Header>
          <Modal.Title>
            Create product
          </Modal.Title>
          <button style={{border:'none', backgroundColor:'white', textDecoration:'none', fontFamily:'none'}} onClick={this.handleClick}>✖</button>
          </Modal.Header>

          <Modal.Body style={{textAlign:'left'}}>
            <FormGroup>
            <label>Title</label>
            <Form.Control type="text" onChange={e => this.setState({ title: e.target.value })} defaultValue={this.state.title} />
            </FormGroup>
            <FormGroup>
            <label>Description</label>
            <Form.Control as="textarea" rows="5" onChange={e => this.setState({ description: e.target.value })} defaultValue={this.state.description} />
            </FormGroup>
            <FormGroup>
            <label>Author</label>
            <Form.Control type="text" onChange={e => this.setState({ author: e.target.value })} defaultValue={this.state.author} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.createCode}>Create product</Button>
          </Modal.Footer>
      </Form>
      </Modal.Dialog>
      </div>
    );
  }
}
