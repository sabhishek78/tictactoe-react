import React from "react";
import Square from "../Square";
class Grid extends React.Component {
    getGridRow(offset) {
        return (<div className="grid-row">
            <Square value={this.props.squares[offset + 0]} squarePressed={() => this.props.handleClick(offset + 0)}/>
            <Square value={this.props.squares[offset + 1]} squarePressed={() => this.props.handleClick(offset + 1)}/>
            <Square value={this.props.squares[offset + 2]} squarePressed={() => this.props.handleClick(offset + 2)}/>
        </div>);
    }
    render() {
        return (
            <div>
                <div className="grid">
                    {this.props.status}
                    {this.getGridRow(0)}
                    {this.getGridRow(3)}
                    {this.getGridRow(6)}
                </div>
            </div>
        );
    }
}
export default Grid