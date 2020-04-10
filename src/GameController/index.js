import React from "react";
import Grid from "../Grid";


class GameController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true,
            status: 'Player X to move',
            gridList: [Array(9).fill(null),]
        }
    };

    handleClick(index) {
        let squaresCopy = this.state.squares.slice();
        let gridListCopy = this.state.gridList.slice();
        gridListCopy.push(squaresCopy);
        if (squaresCopy[index] !== null) {
            return;
        }
        squaresCopy[index] = this.state.isXNext ? 'X' : 'O';
        if (this.checkForDraw(squaresCopy)) {
            this.setState({
                    squares: squaresCopy,
                    // isXNext: !this.state.isXNext,
                    status: 'Draw!',
                    gridList: gridListCopy,
                }
            )
        } else if (this.checkForWin(squaresCopy, squaresCopy[index])) {
            console.log("win detected!");
            this.setState({
                    squares: squaresCopy,
                    isXNext: !this.state.isXNext,
                    status: 'You Win!!',
                    gridList: gridListCopy,
                }
            )
        } else {
            this.setState({
                    squares: squaresCopy,
                    isXNext: !this.state.isXNext,
                    status: this.state.isXNext ? 'Player O to move' : 'Player X to move',
                    gridList: gridListCopy,
                }
            )
        }
        console.log("GridListCopy=" + gridListCopy);
    }

    checkForDraw(squaresCopy) {
        console.log("Checking for Draw");
        for (var i = 0; i < 9; i++) {
            if (squaresCopy[i] == null) {
                return false;
            }
        }
        return true;
    }

    checkForWin(squaresCopy, player) {
        console.log("Checking forWin");
        if (player == null) {
            return false;
        }
        for (var j = 0; j < 3; j = j + 3) {
            if (squaresCopy[j] === player &&
                squaresCopy[1 + j] === player &&
                squaresCopy[2 + j] === player) {
                console.log("Row Win");
                return true;
            }

        }
        for (var k = 0; k <= 2; k++) {
            if (squaresCopy[k] === player &&
                squaresCopy[k + 3] === player &&
                squaresCopy[k + 6] === player) {
                console.log("column Win");
                return true;
            }
        }
        if (squaresCopy[0] === player && squaresCopy[4] === player && squaresCopy[8] === player) {
            console.log("Diagonal Win");
            return true;
        }
        if (squaresCopy[2] === player && squaresCopy[4] === player && squaresCopy[6] === player) {
            console.log("Diagonal Win");
            return true;
        }
        return false;
    }

    render() {
        return (<div>
            <Grid squares={this.state.squares} isXNext={this.state.isXNext} status={this.state.status}
                  handleClick={(index) => this.handleClick(index)}/>
            <div>
                {
                    this.state.gridList.map((item, index) => (<div>
                        <button onClick={()=>{
                            this.setState({
                           squares:this.state.gridList[index] ,
                            gridList:this.state.gridList.slice(0,index+1),
                        })}}>
                            move number {index}
                        </button>
                        </div>))
                }
            </div>

        </div>)
    }
}

export default GameController