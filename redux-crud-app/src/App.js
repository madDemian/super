import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { UserList } from "./features/users/UserList";
import {AddUser} from "./features/users/AddUser";
import {EditUser} from "./features/users/EditUser";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <UserList />
                    </Route>
                    <Route path="/add-user">
                        <AddUser />
                    </Route>
                    <Route path="/edit-user">
                        <EditUser/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}