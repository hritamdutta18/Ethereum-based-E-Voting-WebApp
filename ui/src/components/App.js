import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Voting from "./Voting";
import StepForm from './stepForm';
import AuthToken from './authtoken';
import Auth from './Auth';

export default function App() {
  if (!navigator.onLine) return "offline";
  if (AuthToken.isAuthenticated()) 
    
  return (
    <Switch>
      <Route path="/" exact component={Voting} />
      <Redirect to="/" />
    </Switch>
  );
  
	else 
    return <StepForm />;
}
