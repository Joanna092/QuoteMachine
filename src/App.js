import React from "react";
import "./App.css";
import quotes from "./quotes.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      object: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      object: quotes[0],
    });
  }

  handleChange() {
    this.setState({
      object: quotes[Math.floor(Math.random() * quotes.length)],
    });
  }

  render() {
    const text = this.state.object.quote;
    const author = this.state.object.character;
    const image = this.state.object.image;

    return (
      <div id="quote-box">
        <h1>Simpsons quote generator</h1>
        <div className="container">
          <div className="row">
            <div className="col col-sm-5">
              <img className="img-fluid" src={image} alt="Simpson Picture" />
            </div>
            <div className="col col-sm-7 textContainer" id="text">
              <h4>{text}</h4>
            </div>
          </div>
        </div>

        <div id="author">
          <h3>~ {author}</h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col buttons">
              <button
                type="button"
                className="btn-lg btn btn-outline-dark"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${this.state.object.quote}%0a%0a~%20${this.state.object.character}`
                  )
                }
              >
                <a class="button" id="tweet-quote" target="_blank">
                  <i class="fa fa-twitter"> Tweet me</i>
                </a>
              </button>
            </div>

            <div className="col buttons">
              <button
                type="button"
                className="btn-lg btn btn-outline-dark"
                onClick={this.handleChange}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
