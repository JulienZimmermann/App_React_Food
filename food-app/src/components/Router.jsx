import React from 'react';
import {BrowserRouter, Switch,Route, Redirect} from "react-router-dom";
import App from '../App';
import Recipe from './Recipe';
import NotFound from './NotFound';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/recipe/:id" component={Recipe}/>
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found"/>
            </Switch>  
        </BrowserRouter>  
    )
}

export default Router;