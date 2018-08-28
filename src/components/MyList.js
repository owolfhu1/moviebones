import React from 'react';
import {Button, Carousel, FormControl} from "react-bootstrap";

const header = {
    position : 'absolute',
    top: 0, width: '100%',
    textAlign : 'center',
    color: 'white'
};

class MyList extends React.Component {
    
    render() {
        return (
            <div style={{textAlign: 'center'}} className="container">
                <h1 >My Movie List</h1>
                <select className={'btn'}>
                    <option value="YorkieMovieId1234">Yorkie movie</option>
                    <option value="PoodleMovieId1234">Poodle movie</option>
                    <option value="MuttTailsId1234">Mutt tails</option>
                </select> <Button bsStyle="link">remove</Button>
                <Button bsStyle="link">details</Button>
                <hr/>
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/1.jpg"/>
                        <div style={header}>
                            <h1>Yorkie movie</h1>
                        </div>
                        <Carousel.Caption>
                            <p>great movie about a great yorkie</p>
                            <Button bsStyle="link">remove</Button>
                            <Button bsStyle="link">details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/13.jpg"/>
                        <div style={header}>
                            <h1>Poodle movie</h1>
                        </div>
                        <Carousel.Caption>
                            <p>The adventures of a poodle</p>
                            <Button bsStyle="link">remove</Button>
                            <Button bsStyle="link">details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'400px'}} alt="text" src="./images/28.jpg"/>
                        <div style={header}>
                            <h1>Mutt tails</h1>
                        </div>
                        <Carousel.Caption>
                            <p>Where will he go next??</p>
                            <Button bsStyle="link">remove</Button>
                            <Button bsStyle="link">details</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MyList;