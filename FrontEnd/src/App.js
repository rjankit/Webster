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
function App() {
  const [users, setUsers] = useState("g");
  const user = useSelector(selectUser);
  if (users !== "") {
    return <Home />;
  }
  return (
    <div>
      {!user ? <Login /> : <Home />}
      {/*<BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUpForm />
        </Route>
        <Route path="/signUp">
          <SignUpForm />
        </Route>
        <Route path="/signIn" component={withRouter(LoginForm)} />
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>*/}
    </div>
  );
}

export default App;
