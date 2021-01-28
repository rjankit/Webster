import React, { Component } from "react";
import { useState, useEffect } from "react";

/*export class Tester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    const test = [{ name: "Ankit" }, { name: "Rishu" }];
    this.setState({ posts: test });
    //console.log(this.state.posts);
  }
  render() {
    //console.log(this.state.posts);
    return <div>Ankit</div>;
  }
}
*/

const Tester = () => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    const teste = [{ name: "Ankit" }, { name: "Rishu" }];
    setTest(teste);
  }, []);
  return (
    <div>
      {test.map((post) => {
        return post.name;
      })}
    </div>
  );
};

export default Tester;
