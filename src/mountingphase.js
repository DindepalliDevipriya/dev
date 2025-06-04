import React from 'react';

export class MountingPhase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null
    };
    console.log('Constructor: Component is being created.');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted.');
    this.setState({
      name: 'Devi Priya',
      age: 22
    });
  }

  render() {
    console.log('Render: Component is rendering.');
    return (
        <div>
        <p><strong>Name:</strong> {this.state.name}</p>
        <p><strong>Age:</strong> {this.state.age}</p>
      </div>
    );
  }
}
