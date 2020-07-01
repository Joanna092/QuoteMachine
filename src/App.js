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
        <h1>Simpsons quote generator</h1>
         <div className="container">
          <div className="row">
        <div className="col-5"><img className="img-fluid" src={image} alt="Simpson Picture" /></div>
        <div className="col-7 textContainer" id="text"><h4>{text}</h4></div>
        </div>
        </div>

        <div id="author"><h3>~ {author}</h3></div>

<div className="container">
  <div className="row">


  <div className="col buttons">

<button type="button" className="btn-lg btn btn-outline-dark" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${this.state.object.quote}%0a%0a~%20${this.state.object.character}`)} ><a class="button" id="tweet-quote" target="_blank">
<i class="fa fa-twitter"> Tweet me</i></a></button>
</div>


    <div className="col buttons">

        <button type="button" className="btn-lg btn btn-outline-dark"
        onClick={this.handleChange}
        >New quote</button>

</div>


        </div>
        </div>

    </div>
      )
  }
}

export default App




