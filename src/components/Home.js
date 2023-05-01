import React from "react";
import Selfimg from '../assets/20230322_131533.jpg'

function Home() {
    return (
      <div className="home-page" >
        <div className="name" style={{marginLeft: "200px"}}>𝙀𝙧𝙞𝙘 </div>
        <div className="name" style={{marginLeft: "200px"}}> 𝚁𝚎𝚢𝚎𝚜</div>
        <img  className="self-image" src={Selfimg} alt="Eric Reyes"/>
        <p className="about-me">Hey! My name is Eric Reyes, and I am currently on my way to become a fullstack developer, with some work still left to do! I had been working in Construction for most of my adult life, and decided to finally make a change and move towards a career that has always caught my interest. My heart and mind are entirely set on this career path, and I am very passionate about learning and growing more as a developer in the coming years </p>
      </div>
    )
};

export default Home;