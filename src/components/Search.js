import React from 'react';
import {Button, Carousel, FormControl} from "react-bootstrap";


class Search extends React.Component {
    
    render() {
        return (
            <div className="container">
                <FormControl placeholder="type to search"/><br/>
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/1.jpg"/>
                        <Carousel.Caption>
                            <h3>Yorkie movie</h3>
                            <p>great movie about a great yorkie</p>
                            <Button bsStyle="link">add to list</Button>
                            <Button bsStyle="link">view details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/13.jpg"/>
                        <Carousel.Caption>
                            <h3>Poodle movie</h3>
                            <p>The adventures of a poodle</p>
                            <Button bsStyle="link">add to list</Button>
                            <Button bsStyle="link">view details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/28.jpg"/>
                        <Carousel.Caption>
                            <h3>Mutt tails</h3>
                            <p>Where will he go next??</p>
                            <Button bsStyle="link">add to list</Button>
                            <Button bsStyle="link">view details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Search;