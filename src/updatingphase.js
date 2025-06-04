import React from 'react';

export class UpdatingPhase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
        console.log('Constructor: Component is being created.');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps: Component is receiving new props.');
        if (nextProps.value !== prevState.value) {
            return { value: nextProps.value +1};
        }
        //return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Component should update.');
    return nextState.value !== this.state.value;
}

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate: Snapshot before update.');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: Component did update.');
    }

    handleIncrement = () => {
        this.setState((prevState) => ({ value: prevState.value+1 }));
    };

    render() {
        console.log('Render: Component is rendering.');
        return (
            <div>
                <h2>Updating Phase Example</h2>
                <p>Value: {this.state.value}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}