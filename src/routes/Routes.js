import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import AddCompany from "../component/AddCompany";
import AddJobs from "../component/AddJobs";
import Edit from "../component/Edit";
const Routes = () => {

    return (

        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/addCompany"><AddCompany /></Route>
                <Route path="/addJobs"><AddJobs /></Route>
                <Route path="/edit/:id" render={(props) => <Edit  {...props} />} />

            </Switch>
        </>

    )
}


export default Routes;