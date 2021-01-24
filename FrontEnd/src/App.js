
import './App.css';
import LoginForm from './Component/UI/LoginForm/LoginForm';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Axios from "axios";
import TestComponent from './Component/TestComponent'
import SignUpForm from './Component/UI/SignUpForm/SignUpForm';
import User from './Component/UI/User/User';
function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUpForm />
        </Route>
        <Route path="/signUp">
          <SignUpForm />
        </Route>
        <Route path="/signIn" >
            <LoginForm />
        </Route>
        <Route path="/user" >
            <User />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
