import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
      super()
      this.state = {
          loading: false,
          object: {}
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  componentDidMount() {
      this.setState({loading: true})
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
          .then(response => response.json())
          .then(data => {
              this.setState({
                  loading: false,
                  object: data[0]
              })
          })
  }

  handleChange() {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(response => response.json())
    .then(data => {
        this.setState({
          loading: false,
          object: data[0]
        })
    })
  }

  render() {
      const text = this.state.loading ? "loading..." : this.state.object.quote
      const author = this.state.loading ? "loading..." : this.state.object.character
      const image = this.state.loading ? "loading..." : this.state.object.image

      return (
        <div id="quote-box">
        <div id="text">{text}</div>
        <div><img src={image} alt="Simpson Picture" /></div>
        <div id="author">{author}</div>
        <div id="new-quote"><button 
        onClick={this.handleChange}
        >New quote</button></div>
        <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${this.state.object.quote}%0a%0a~%20${this.state.object.character}`)} ><a class="button" id="tweet-quote" target="_blank">
        <i class="fa fa-twitter">tweet me</i></a></button>

    </div>
      )
  }
}

export default App




