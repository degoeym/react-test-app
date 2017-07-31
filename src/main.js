import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                </Switch>
            </main>
        );
    }
}

export default Main;