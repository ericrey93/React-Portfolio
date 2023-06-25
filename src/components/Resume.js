import React from "react";
import Card from 'react-bootstrap/Card';


function Resume() {
    return (
        <div>

        <p style={{ fontSize: '35px', textAlign: 'center', fontFamily: 'cursive'}}>The link to my actual resume is <a href="https://docs.google.com/document/d/1ROLCNccFlGBmMibDnU1gkhtssfB_Ipev/edit">here</a>.</p>
        <Card  style={{ width: '22rem', margin: '20px', borderColor: 'black' }}>
          <Card.Body>
            <Card.Title style={{fontFamily: 'serif', fontSize: '25px', fontWeight: 'bold', color: 'Purple'}}>Software/Programming Skills</Card.Title>
            <Card.Text style={{fontSize: '22px', fontFamily: 'serif', color: 'black'}}>
                HTML, CSS, Javascript, React, Node.js, MySQL, MongoDB, GraphQL, MVC, jquery, Git, JSON, bootstrap, 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card  style={{ width: '22rem', margin: '20px', borderColor: 'black' }}>
          <Card.Body>
            <Card.Title style={{fontFamily: 'serif', fontSize: '25px', fontWeight: 'bold', color: 'Purple'}}>Adaptability</Card.Title>
            <Card.Text style={{fontSize: '22px', fontFamily: 'serif', color: 'black'}}>
                Always willing to work alone or with a team. Work great under pressure and multitasking multiple projects. Go the extra mile to finish any work on time.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem', margin: '20px', borderColor: 'black' }}>
          <Card.Body>
            <Card.Title style={{fontFamily: 'serif', fontSize: '25px', fontWeight: 'bold', color: 'Purple'}}>Communication</Card.Title>
            <Card.Text style={{fontSize: '22px', fontFamily: 'serif', color: 'black'}}>
                
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      );
}

export default Resume;