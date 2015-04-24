'use strict';

var React = require('react');

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}

// class MailBoxForm extends React.Component {
//   <form onSubmit={this.handleSubmit}>
//     <input onChange={this.onChange} value={this.state.text} />
//     <button>{'Add #'}</button>
//   </form>  
// }

 
// var el = document.getElementsByClassName('_3tkv _5vn4')
// console.log(el)
// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// el[0].appendChild(para);

var els = document.getElementsByClassName('_3tkv _5vn4')
console.log(els)
console.log(els[0])
var el = els[0]
console.log(el)

function renderReact () {
    var el = document.getElementsByClassName('_3tkv _5vn4')[0]
    var para = document.createElement("div");
    para.className = "messenger-pro"
    el.appendChild(para);
    console.log(el)

    React.render(
      //<MailBoxForm />,
      <HelloWorld />,
      document.getElementsByClassName('messenger-pro')[0]
    );
}

window.setTimeout(renderReact, [2000]);



console.log('\'Allo \'Allo! Content Script Injected');