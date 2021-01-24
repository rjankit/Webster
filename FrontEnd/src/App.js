import "./App.css";
import LoginForm from "./Component/UI/LoginForm/LoginForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TestComponent from "./Component/TestComponent";
import SignUpForm from "./Component/UI/SignUpForm/SignUpForm";
import User from "./Component/UI/User/User";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("");
  if (user !== "") {
    return <TestComponent />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUpForm />
        </Route>
        <Route path="/signUp">
          <SignUpForm />
        </Route>
        <Route path="/signIn">
          <LoginForm setUser={setUser} />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
