import React from "react";
import { useParams } from "react-router";

const Test = () => {
  const params = useParams();
  console.log(params);
  return <div>Ankit</div>;
};

export default Test;
