import React, { Component } from 'react';

class AddTask extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.add = this.add.bind(this);
    }
    add() {
        this.props.createTask(this.state.value)

        this.setState({value: ''});
    }

    render() {
        return (
            <div className="create-task">
                <input type="text"
                    value={this.state.value}
                    placeholder="What would Reza do?"
                    onChange={(e) => { this.setState({value: e.target.value}) }}/>

                <button className="addButton" onClick={this.add}>ADD</button>
            </div>
        );
    }
}

export default AddTask;