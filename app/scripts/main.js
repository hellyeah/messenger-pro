'use strict';

var React = require('react');

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}
 
React.render(
  <HelloWorld />,
  document.body
);

console.log('\'Allo \'Allo! Content Script Injected');