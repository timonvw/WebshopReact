import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { ModalDetail } from './ModalDetail';

export class CardCode extends React.Component 
{
    constructor() 
    {
      super();
      this.state = {
        code: [],
        seen: false,
        deleted: false,
    }
    }

    componentDidMount() {
        this.loadCode();
    }

    togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });

        this.reloadCode();
    }

    reloadCode = () => {
        this.loadCode();
    }

    deleteCode = () => {
        fetch('http://ec2-54-82-239-154.compute-1.amazonaws.com:9000/codes/' + this.state.code._id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => {
            this.setState({
                deleted: true
              });
        }).catch(err => err);
    }


    async loadCode() {
        const response = await fetch(this.props.uri)
        const json = await response.json()
        this.setState({code:json})
        //console.log("LOL")
    }

    render() {
        let className = '';
        if (this.state.deleted) 
        {
            className += ' deleted';
        }
        else
        {
            this.loadCode();
        }

        return (
    
            <Col className={className} lg={true}>
            <Card style={{ width: '20rem', height: '180px', marginBottom: '30px'}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" als ik een foto zou willen maybe/> */}
                <Card.Body style={{textAlign:'left'}}>

                    <Card.Title>{this.state.code.title}</Card.Title>
                    
                    <Card.Text style={{textAlign:'left'}}>
                        {this.state.code.author}
                    </Card.Text>

            
                </Card.Body>
                {this.state.seen ? <ModalDetail toggle={this.togglePop} reloadCode={this.reloadCode} code={this.state.code}/> : null}
                <div style={{textAlign:'right'}}>
                    <Button variant="primary" onClick={this.togglePop} style={{ marginBottom: '20px'}}>details</Button>
                    <Button variant="danger" onClick={this.deleteCode} style={{ marginLeft: '10px', marginRight: '20px', marginBottom: '20px'}}>delete</Button>
                </div>
            </Card>
            </Col>
        );
    }
}