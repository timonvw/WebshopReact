import React from 'react';
import { CardCode } from './CardCode';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { ModalCreate } from './ModalCreate';

export class Webshop extends React.Component 
{
    constructor() 
    {
      super();
      this.state = { 
        codes: [],
        data: [1,2,3],
        opened: false,
        }
    }

    togglePop = () => {
        this.setState({
          opened: !this.state.opened
        });
    }

    componentDidMount()
    {
        this.loadCodes();
    }

    reloadCodes = () => {
        this.loadCodes();
        this.forceUpdate();
        this.setState({ state: this.state });
    }
    
    async loadCodes() {
        fetch('http://ec2-54-82-239-154.compute-1.amazonaws.com:9000/codes?page=1&limit=99')
        .then(response => response.json())
        .then(codes => this.setState({ codes: codes.items }));
        //console.log(this.state.codes);
    }

    render() {
        
        let cards = this.state.codes.map((singleCode, i) =>
            <CardCode key={i} title={singleCode.title} author={singleCode.author} reloadCodes={this.reloadCodes} uri={singleCode._links.self.href}/>
        )

        return (
            <Container>
                <Jumbotron fluid>
                    <Container>
                        <h1>Admin panel</h1>
                        <p>
                            U bent nu op de admin panel van de CodeGame Shop, verlaat de admin panel door uit te loggen.
                        </p>
                    </Container>
                </Jumbotron>
                <Button variant="success" onClick={this.togglePop}  style={{marginBottom:'30px', textAlign:'left'}}block>Add product</Button>
                <Row>
                <CardDeck>{cards}</CardDeck>
                </Row>
                {this.state.opened ? <ModalCreate toggle={this.togglePop} reloadCodes={this.reloadCodes}/> : null}
            </Container>
        )   
    }
}