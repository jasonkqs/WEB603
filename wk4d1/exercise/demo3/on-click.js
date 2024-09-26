"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }
handleClick(event) {
  alert('hey! you clicked: ${event.target.id}')
}

  render() {
    // TODO: Your task is to add onClick listeners to each of the elements within the container-div <div>
    return (
      <div className="container-div">
        <div id="div-element" OnClickElements={(e) => this.handleClick(e)} >
          I am DIV
        </div>

        <span id="span-element"OnClickElements={(e) => this.handleClick(e)}  >
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" OnClickElements={(e) => this.handleClick(e)} >
          I am Button
        </button>
        <br></br>

        <a id="link-element" href="" OnClickElements={(e) => this.handleClick(e)} >
          I am LINK
        </a>

        <div
          id="div-element-2"
          className="button"
          OnClickElements={(e) => this.handleClick(e)}
        >
          I am DIV
        </div>

        <span
          id="span-element-2"
          className="button"
          OnClickElements={(e) => this.handleClick(e)}
        >
          I am SPAN
        </span>
        <br></br>

        <button
          id="button-element-2"
          className="button"
          OnClickElements={(e) => this.handleClick(e)}
        >
          I am Button
        </button>
        <br></br>
        OnClickElements={(e) => this.handleClick(e)}
        <a
          id="link-element-2"
          className="button"
          href=""
          OnClickElements={(e) => this.handleClick(e)}
        >
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
