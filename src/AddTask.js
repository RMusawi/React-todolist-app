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
                    className="add-task__input"
                    placeholder="What would Reza like todo?"
                    onChange={(e) => { this.setState({value: e.target.value}) }}/>

                <button className="addButton" onClick={this.add}>ADD</button>
            </div>
        );
    }
}

export default AddTask;