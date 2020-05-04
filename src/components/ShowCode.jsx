import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { ModalDetail } from './ModalDetail';
import { Header } from './Header';
import { Footer } from './Footer';

export class ShowCode extends React.Component 
{
    constructor() 
    {
      super();
      this.state = {
        code: [],
    }
    }

    componentDidMount() {
        this.loadCode()
    }

    async loadCode() {
        const response = await fetch('http://ec2-54-82-239-154.compute-1.amazonaws.com:9000/codes/' + this.props.match.params.id)
        const json = await response.json()
        this.setState({code:json})
        //console.log(json)
    }

    render() {

        return (
            <>
            <Header />
            <p>{this.state.code.title}</p>
            <p>{this.state.code.description}</p>
            <p>{this.state.code.author}</p>
            <Footer />
            </>
        )
    }
}