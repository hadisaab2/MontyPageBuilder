import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserPages from "./Pages/UserPages";
import Editor from "./Editor";
import Editoraux from "./Editoraux";

import { pageLoad } from "./redux/actions/pageAction";
import CreatePage from "./Pages/CreatePage";
import "./styles/main.css"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/Pages" component={UserPages}></Route>
        <Route exact path="/CreatePage" component={CreatePage}></Route>
        <Route exact path="/editor/:pageId" component={Editoraux}></Route>
      </Switch>
    </Router>
  );
}

export default App;
