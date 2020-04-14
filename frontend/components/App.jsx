import React from "react";
// import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//Primary Components
import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash_container';
import Footer from './footer/footer';
//Pets Components
import PetIndexContainer from './pets/pet_index_container';
import PetShowContainer from './pets/pet_show_container';
import AdoptContainer from './pets/adopt_container'
//User Component
import UserShowContainer from './user/user_show_container';


const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <Switch>
            <Route exact path='/pets/:id' component={PetShowContainer} />
            <ProtectedRoute exact path='/pets/adopt/:id' component={AdoptContainer} />
            <Route exact path='/pets' component={PetIndexContainer} />
            <ProtectedRoute exact path='/user' component={UserShowContainer} />
            <Route exact path='/' component={Splash}/>
        </Switch>
        <Route path='/' component={Footer} />
    </div>
);

export default App;