import React from "react";

// import 'styles.css';
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'O',
            color: 'red'
        }
    }

    render() {
        return (
            <button className="square-button" onClick={() =>
                this.setState({
                    value: 'X',
                    color: 'green'
                })}
                    style={{color: this.state.color}}>{this.state.value}</button>
        )
    }
}

export default Square;