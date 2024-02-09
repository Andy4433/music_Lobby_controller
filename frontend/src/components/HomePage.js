
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

export default class HomePage extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/frontend/">
            <p>This is the home page</p>
          </Route>
          <Route path="/frontend/join/" component={RoomJoinPage} />
          <Route path="/frontend/create/" component={CreateRoomPage} />
          <Route path="/frontend/room/:roomCode" component={Room}/>
        </Switch>
      </Router>
    );
  }
}
