import "./App.css";
import LoginForm, { myLoginForm } from "./Component/UI/LoginForm/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./Component/UI/SignUpForm/SignUpForm";
import User from "./Component/UI/User/User";
import { useState } from "react";
import { withRouter } from "react-router";
import Home from "./Component/UI/Home/Home";
import Tester from "./Component/UI/Tester/Tester";
import { useSelector } from "react-redux";
import { selectUser } from "./Store/Userslice/Userslice";
import Login from "./Component/UI/Login/Login";
import SignUp from "./Component/UI/SIgnUp/SignUp";
function App() {
  const [users, setUsers] = useState("");
  const user = useSelector(selectUser);
  //console.log(user);
  if (users !== "") {
    return <Home />;
  }
  return (
    <div>
      <BrowserRouter>
        {
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/signUp">
              <SignUp />
            </Route>

            <Route path="/signIn">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
