import React from 'react';
import { Link, useRouteMatch, useParams, Switch, Route } from 'react-router-dom';

const Home = () => {
    const {url, path} = useRouteMatch();
    
    return(
        <>
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab provident quo voluptatum quisquam, voluptate quibusdam deleniti consequuntur tempora sequi. Impedit voluptatibus quidem voluptatum sint sequi, cumque maxime earum incidunt?</p>
        
            <nav>
                <ul>
                    <li><Link to={`${url}/meow`}>Gato</Link></li>
                    <li><Link to={`${url}/pacman`}>Pacman</Link></li>
                    <li><Link to={`/meow`}>Play Gato Meow!</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${path}/:gameName`}>
                    <GameDescription />
                </Route>
            </Switch>
            <em>Select a game to see a short description</em>
        </>
    );
}

const GameDescription = () => {
    const {gameName} = useParams();
    return(
        <>
            <h3>{gameName}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    );
}

export default Home;