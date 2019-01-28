import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";
import ProjectDetails from './components/project/ProjectDetail'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/project/CreateProject";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/project/:id' component={ProjectDetails}></Route>
                    <Route path='/signin' component={SignIn}></Route>
                    <Route path='/signup' component={SignUp}></Route>
                    <Route path='/create' component={CreateProject}></Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
