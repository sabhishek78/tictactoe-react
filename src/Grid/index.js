import React from "react";
import Square from "../Square";
class Grid extends React.Component{
    getGridRow(offset){
        return(<div className="grid-row">
            <Square indexNumber={offset+0}/>
            <Square indexNumber={offset+1}/>
            <Square indexNumber={offset+2}/>
        </div>);
    }
    render() {
        return(
            <div className="grid">
                {this.getGridRow(1)}
                {this.getGridRow(4)}
                {this.getGridRow(7)}
            </div>
        );
    }
}
export default Grid