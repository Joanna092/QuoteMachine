import React from 'react';
import './App.css';

function App() {
  return (
    <div id="quote-box">
        <div id="text">Text within the quote-box</div>
        <div id="author">Author</div>
        <div id="new-quote"><button>New quote</button></div>
        <button><a class="button" id="tweet-quote" target="_blank">
        <i class="fa fa-twitter">tweet me</i></a></button>
    </div>
  );
}

export default App;
