import React from "react";
import Card from 'react-bootstrap/Card';

import ReadIt from '../assets/readIt.png';
import TextEditor from '../assets/textEditor.png';
import WorkScheduler from '../assets/workScheduler.png';
import PasswordGenerator from '../assets/passwordGenerator.png';

function Project() {

    const allProjects = [
    {
        id: "1",
        name: "Read It!",
        image: ReadIt,
        description: "The very first project I worked on! A Book Search Engine that will search any book you type using the Google Books API! Also gives reccommended movies based on search.",
        github: 'https://github.com/BrennonSullivan/projet1',
        website: 'https://brennonsullivan.github.io/projet1/'
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
    }, {
        id: '5',
        name: 'Giv 2',
        image: 'Coming Soon!',
        description: 'A search engine that gives you access to search every charity in the US based on the city you want! also has other resources on how to donate and the biggest nonprofit organizations!',
        github: 'https://github.com/ilknur2603/Distrubution-finder',
        website: ''
    }
]

    return   (

        allProjects.map((project) => (
                    <Card style={{ width: '30rem',  margin: '20px', marginLeft: '600px'}}>
        <Card.Img variant="Book" src={project.image} style={{width: '30rem'}} />
        <Card.Body style={{backgroundImage: 'linear-gradient(to right, red , yellow)'}}>
          <Card.Title style={{backgroundImage: 'linear-gradient(to right, red , yellow)', fontSize: '30px', color: "Green"}} >{project.name}</Card.Title>
          <Card.Text style={{backgroundImage: 'linear-gradient(to right, red , yellow)', fontFamily: 'fantasy'}}>{project.description}
          </Card.Text>
          <Card.Link style={{  fontFamily: 'fantasy'}} href={`${project.website}`}>Live Page Here</Card.Link>
          <Card.Link style={{  fontFamily: 'fantasy'}} href={`${project.github}`}>Github Page Here</Card.Link>
        </Card.Body>
      </Card>
        ))




    );
}
export default Project;