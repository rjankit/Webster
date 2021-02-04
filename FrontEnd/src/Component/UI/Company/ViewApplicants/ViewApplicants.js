import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Widgets from "../../Widgets/Widgets";
import "./ViewApplicants.css";
import ViewApplicantsPost from "./ViewApplicantsPost/ViewApplicantsPost";
const ViewApplicants = () => {
  const params = useParams();
  const id = params.id;
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/getApplicants", { id: id })
      .then((response) => {
        let temp = [];
        for (var i in response.data.Object) {
          const a = response.data.Object[i];
          temp.push({
            id: i,
            data: {
              name: a.name,
              email: a.email,
              githubId: a.githubId,
              resumeId: a.resumeId,
            },
          });
        }
        setApplicants(temp);
      });
  }, []);
  return (
    <div className="viewApplicants">
      <Header />
      <div className="viewApplicants_body">
        <Sidebar />
        <div className="viewApplicants_feed">
          {applicants.map(
            ({ id, data: { name, email, githubId, resumeId } }) => {
              return (
                <ViewApplicantsPost
                  id={id}
                  name={name}
                  email={email}
                  githubId={githubId}
                  resumeId={resumeId}
                />
              );
            }
          )}
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default ViewApplicants;
