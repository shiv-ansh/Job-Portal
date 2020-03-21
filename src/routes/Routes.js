import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import AddCompany from "../component/AddCompany";
import AddJobs from "../component/AddJobs";
const Routes = () => {

    return (

        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/addCompany"><AddCompany /></Route>
                <Route path="/addJobs"><AddJobs /></Route>

            </Switch>
        </>

    )
}


export default Routes;