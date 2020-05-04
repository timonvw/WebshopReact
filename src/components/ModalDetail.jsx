import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Form from 'react-bootstrap/Form';

export class ModalDetail extends React.Component 
{
  constructor() 
  {
    super();
    this.state = { 
      id: "",
      title: "",
      description: "",
      author: "",
      editable: false,
      }
  }

  handleClick = () => {
    this.props.toggle();
    //console.log(this.props.code.title);
  };

  editClick = () => {
    this.setState({
      editable: !this.state.editable
    });

    if (this.state.editable) {
        fetch('http://ec2-54-82-239-154.compute-1.amazonaws.com:9000/codes/' + this.state.id, {
          method: 'PUT',
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
          this.setState({
            editable: false
          });
          //this.handleClick();
          this.props.reloadCode();
        }).catch(err => err);
    }else{
      this.setState({
        id: this.props.code._id,
        title: this.props.code.title,
        description: this.props.code.description,
        author: this.props.code.author,
      });
    }
  }

  render() {

    return (
      <div className="modalBackground">
       <Modal.Dialog style={{zIndex:'10', margin: '15% auto'}}>
       <Form>
          <Modal.Header>
          <Modal.Title>
            {this.state.editable ? <Form.Control type="text" onChange={e => this.setState({ title: e.target.value })} defaultValue={this.state.title} /> :this.props.code.title}
          </Modal.Title>
          <button style={{border:'none', backgroundColor:'white', textDecoration:'none', fontFamily:'none'}} onClick={this.handleClick}>✖</button>
          </Modal.Header>

          <Modal.Body style={{textAlign:'left'}}>
            <p>{this.state.editable ? <Form.Control as="textarea" rows="5" onChange={e => this.setState({ description: e.target.value })} defaultValue={this.state.description} /> :this.props.code.description}</p><br></br>
            <p style={{float:'left'}}>Aangeboden door: <b>{this.state.editable ? <Form.Control type="text" onChange={e => this.setState({ author: e.target.value })} defaultValue={this.state.author} /> :this.props.code.author}</b></p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.editClick}>{this.state.editable ? 'Save changes' : 'Edit item'}</Button>
          </Modal.Footer>
      </Form>
      </Modal.Dialog>
      </div>
    );
  }
}
