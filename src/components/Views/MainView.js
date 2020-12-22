import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
}
    from 'react-router-dom'
import About from './About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Education from './Education/Education'

const MainView = ({ profileDetails }) => {
    return (
        <Router>
            <Switch>
                <Route exact path='/react-portfolio-app/'>
                    <About profileDetails={profileDetails}></About>
                </Route>
                <Route exact path='/projects'>
                    <Projects profileDetails={profileDetails}></Projects>
                </Route>
                <Route exact path='/experience'>
                    <Experience profileDetails={profileDetails}></Experience>
                </Route>
                <Route exact path='/education'>
                    <Education profileDetails={profileDetails}></Education>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainView;