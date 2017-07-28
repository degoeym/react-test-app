import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
            </Switch>
        );
    }
}

export default Routes;