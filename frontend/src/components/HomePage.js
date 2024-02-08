import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/frontend/">
            <p>This is the home page</p>
          </Route>
          <Route path="/frontend/join" component={RoomJoinPage} />
          <Route path="/frontend/create" component={CreateRoomPage} />
        </Switch>
      </Router>
    );
  }
}
