import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./Component/UI/User/User";
import { useState } from "react";
import { withRouter } from "react-router";
import Home from "./Component/UI/Home/Home";
import Tester from "./Component/UI/Tester/Tester";
import { useSelector } from "react-redux";
import { selectUser } from "./Store/Userslice/Userslice";
import Login from "./Component/UI/Login/Login";
import SignUp from "./Component/UI/SIgnUp/SignUp";
import ForgotPassword from "./Component/UI/ForgotPassword/ForgotPassword";
import CompanySignUp from "./Component/UI/Company/CompanyLogin/CompanySignUp/CompanySignUp";
import CompanyLogin from "./Component/UI/Company/CompanyLogin/CompanyLogin";
import CompanyHome from "./Component/UI/Company/CompanyLogin/CompanyHome/CompanyHome";
import Test from "./Component/Test/Test";
import Job from "./Component/UI/Job/Job";
import NewJobOpening from "./Component/UI/Company/CompanyLogin/NewJobOpening/NewJobOpening";
import DeveloperJobPage from "./Component/UI/DeveloperJobPage/DeveloperJobPage";
import ApplyPage from "./Component/UI/ApplyPage/ApplyPage";
import ViewApplicants from "./Component/UI/Company/ViewApplicants/ViewApplicants";
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

            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>

            <Route path="/companySignup">
              <CompanySignUp />
            </Route>

            <Route path="/companyLogin">
              <CompanyLogin />
            </Route>

            <Route path="/companyHome">
              <CompanyHome />
            </Route>

            <Route path="/test/:id">
              <Test />
            </Route>

            <Route path="/job/:id">
              <Job />
            </Route>

            <Route path="/newJobOpening">
              <NewJobOpening />
            </Route>

            <Route path="/developerJobs">
              <DeveloperJobPage />
            </Route>

            <Route path="/applyNow/:id">
              <ApplyPage />
            </Route>

            <Route path="/viewApplicants/:id">
              <ViewApplicants />
            </Route>
          </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
