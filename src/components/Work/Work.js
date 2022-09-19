import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../Card';

const Work = () => {
    let projects = [{
        title: 'Book Search Engine',
        github: 'https://github.com/MattYouKnowWho/BookSearchEngine',
        heroku: 'https://bk-srch-engine.herokuapp.com/',
        image: 'https://user-images.githubusercontent.com/99387661/190893096-2e10ae9a-e970-4e57-8da1-1c10ceb3ddc5.png',
        description: 'A Book search engine using code from a Google Books API search engine that was built with a RESTful API but refractor to be a GraphQL API built with Apollo Server. This App is also built using the full MERN stack with React front end, MongoDB database, Node.js/Express.js server and API. ',
    },
    {
        title: 'Knot So Shallow',
        github: 'https://github.com/MattYouKnowWho/Knot-So-Shallow-DatingApp',
        heroku: 'https://knotsoshallowdating.herokuapp.com/',
        image: 'https://user-images.githubusercontent.com/99387661/188281924-894d7a85-f8d1-4f46-895d-d280b72bee32.png',
        description: 'A Dating Application developed for people who are "Not Shallow". It was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and RESTful API.',
    },
    {
        title: 'Düdl',
        github: 'https://github.com/MattYouKnowWho/Project-2-D-dl',
        heroku: 'https://dudl.herokuapp.com/',
        image: 'https://user-images.githubusercontent.com/99387661/190932763-c3056bb1-f253-445f-b986-1f90078f7e0b.png',
        description: 'Düdl is a multiplayer drawing and guessing game. One game consists of rounds where players take turns drawing a word while the other players try and guess it to gain points. At the end of each round, the player with the most points wins!!',
    },
    {
        title: 'Stream Availability',
        github: 'https://github.com/MattYouKnowWho/Stream_Availability',
        heroku: 'https://swagnarok630.github.io/Stream_Availability/',
        image: 'https://github.com/MattYouKnowWho/Stream_Availability/raw/main/deployed.jpg',
        description: 'A simple web app that randomly generates a movie or show to watch based on user input criteria',

        
    },
    {
        title: 'Weather App',
        github: 'https://github.com/MattYouKnowWho/WeatherDashboard',
        heroku: 'https://mattyouknowwho.github.io/WeatherDashboard/',
        image: 'https://user-images.githubusercontent.com/99387661/190340227-afdcb95e-d813-477f-9cf3-fc6e50377835.png',
        description: 'Using OpenWeather API to display a 5-day forecast and have history for each city the user searched. Of course, making it visually pleasing as well.',
    },
    {
        title: 'Star Wars Trivia',
        github: 'https://github.com/MattYouKnowWho/Code_Quiz',
        heroku: 'https://mattyouknowwho.github.io/Code_Quiz/',
        image: 'https://user-images.githubusercontent.com/99387661/185348107-14278d4b-d089-49b9-9594-5d2f95d1a94c.png',
        description: 'This coding quiz tests the knowledge of Star Wars Fans. It uses a timer of 30 secs to answer 4 questions. At the end, this quiz will display the amount of questions the user answered correctly. IF the user answers incorrectly, the timer will subtract 10 seconds until GAME OVER.',
    },
]



    return (
        <>
           <Grid container justifyContent="center">
        <h1>My projects 🧠 </h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        
        {projects.map(project => 
          <Grid item>
            <Card title={project.title} github={project.github} heroku={project.heroku} image={project.image} description={project.description} ></Card>
            </Grid>
          )}
        </Grid>
        </>
    );
};

export default Work;