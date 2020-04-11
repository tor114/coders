import React from 'react';
import ReactDOM from 'react-dom';

// return <p>Hello {Object.values(this.props.person).join(', ')}</p>


class Hello extends React.Component {
  render() {
    return <p>Hello {this.props.name} {this.props.surname}</p>
  }
}

// const Hello = ({name, surname}) => <p>Hello {name} {surname}</p>;
// const Hello = (props) => <p>Hello {props.name} {props.surname}</p>;

const people = [
  { name: "John", surname: "Doe" },
  { name: "Martin", surname: "Tester", render: "ddd"}
];

ReactDOM.render(
  <>
    {people.map((p,i) => <Hello key={i} name={p.name} surname={p.surname}/>)}
  </>,
  document.querySelector('#app')
);