import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ReadIt from '../assets/readIt.png';
import TextEditor from '../assets/textEditor.png';
import WorkScheduler from '../assets/workScheduler.png';
import PasswordGenerator from '../assets/passwordGenerator.png';
import CharitySearch from '../assets/hero.png'

function Project() {

    const allProjects = [
        {
            id: '1',
            name: 'Giv 2',
            image: CharitySearch,
            description: 'A search engine that gives you access to search every charity in the US based on the city you want! also has other resources on how to donate and the biggest nonprofit organizations!',
            github: 'https://github.com/ilknur2603/Distrubution-finder',
            website: 'https://distribution-finder.herokuapp.com/'
        }, {
            id: '2',
            name: 'Text Editor',
            image: TextEditor,
            description: 'App that keeps track of all notes you decide to write in it! Every note gets saved in the local storage with option to delete whenever you want.',
            github: 'https://github.com/ericrey93/Text-Editor',
            website: 'https://glacial-citadel-14717.herokuapp.com/'
        }, {
            id: "3",
            name: 'Work Scheduler',
            image: WorkScheduler,
            description: 'A day by day calender with hourly slot to properly organize your time at work! Background is colorized to show the hour when it has passed, are currently in, or have not happened yet!',
            github: 'https://github.com/ericrey93/Work-Day-Scheduler',
            website: 'https://ericrey93.github.io/Work-Day-Scheduler/'
        }, {
            id: '4',
            name: 'Password Generator',
            image: PasswordGenerator,
            description: 'Password generator which lets you choose how specific you want to be when generating a password! Check the boxes of what you want in the password, and the app will generate it.',
            github: 'https://github.com/ericrey93/Password-Generator',
            website: 'https://ericrey93.github.io/Password-Generator/'
        },     {
            id: "5",
            name: "Read It!",
            image: ReadIt,
            description: "The very first project I worked on! A Book Search Engine that will search any book you type using the Google Books API! Also gives reccommended movies based on search.",
            github: 'https://github.com/BrennonSullivan/projet1',
            website: 'https://brennonsullivan.github.io/projet1/'
        }
    ]

    return (

            <Row xs={1} md={2} className="g-4">
                {allProjects.map((project, idx) => (
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body style={{backgroundImage: 'linear-gradient(to right, black, purple)'}}>
                                <Card.Title className="app-name" style={{backgroundImage: 'linear-gradient(to right, black, purple)', fontSize: '50px', color: 'red', fontWeight: 'bold'}} >{project.name}</Card.Title>
                                <Card.Text className="content" style={{backgroundImage: 'linear-gradient(to right, black, purple)'}}>{project.description}
                                </Card.Text>
                                <Card.Link href={`${project.website}`} style={{backgroundImage: 'linear-gradient(to right, black, purple)'}}>Live Page Here</Card.Link>
                                <Card.Link href={`${project.github}`} style={{backgroundImage: 'linear-gradient(to right, black, purple)'}}>Github Page Here</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
};
export default Project;