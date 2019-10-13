import React, { Component } from "react";
import Prism from "prismjs";
import PrismCode from "./PrismCode";
import styled from "styled-components";
import "../../node_modules/prismjs/themes/prism-okaidia.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px;
  color: black;
`;
const code = `
`;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2;
  grid-gap: 1em;
  grid-template-areas: "codeInput codeOUtput";
`;

class InputField extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }
  state = {
    inputCode: 
  };

  onChangeHandler = async e => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.search(this.state.value);
      if (this.state.value === "") {
        this.setState({ results: "" });
      }
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>efficient JS Playground</h1>
        <StyledDiv>
          <StyledTextArea
            aria-label="empty textarea"
            placeholder="Enter your jQuery code here"
          />
          <PrismCode
            code={code}
            language="js"
            plugins={["line-numbers"]}
          ></PrismCode>
        </StyledDiv>
      </div>
    );
  }
}
export default InputField;
