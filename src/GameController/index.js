
import Grid from "../Grid";
import React, { useState } from 'react';


// class GameController extends React.Component {
//
//
//     handleClick(index) {
//         let squaresCopy = this.state.squares.slice();
//         let gridListCopy = this.state.gridList.slice();
//         gridListCopy.push(squaresCopy);
//         if (squaresCopy[index] !== null) {
//             return;
//         }
//         squaresCopy[index] = this.state.isXNext ? 'X' : 'O';
//         if (this.checkForDraw(squaresCopy)) {
//             this.setState({
//                     squares: squaresCopy,
//                     // isXNext: !this.state.isXNext,
//                     status: 'Draw!',
//                     gridList: gridListCopy,
//                 }
//             )
//         } else if (this.checkForWin(squaresCopy, squaresCopy[index])) {
//             console.log("win detected!");
//             this.setState({
//                     squares: squaresCopy,
//                     isXNext: !this.state.isXNext,
//                     status: 'You Win!!',
//                     gridList: gridListCopy,
//                 }
//             )
//         } else {
//             this.setState({
//                     squares: squaresCopy,
//                     isXNext: !this.state.isXNext,
//                     status: this.state.isXNext ? 'Player O to move' : 'Player X to move',
//                     gridList: gridListCopy,
//                 }
//             )
//         }
//         console.log("GridListCopy=" + gridListCopy);
//     }
//
//     checkForDraw(squaresCopy) {
//         console.log("Checking for Draw");
//         for (var i = 0; i < 9; i++) {
//             if (squaresCopy[i] == null) {
//                 return false;
//             }
//         }
//         return true;
//     }
//
//     checkForWin(squaresCopy, player) {
//         console.log("Checking forWin");
//         if (player == null) {
//             return false;
//         }
//         for (var j = 0; j < 3; j = j + 3) {
//             if (squaresCopy[j] === player &&
//                 squaresCopy[1 + j] === player &&
//                 squaresCopy[2 + j] === player) {
//                 console.log("Row Win");
//                 return true;
//             }
//
//         }
//         for (var k = 0; k <= 2; k++) {
//             if (squaresCopy[k] === player &&
//                 squaresCopy[k + 3] === player &&
//                 squaresCopy[k + 6] === player) {
//                 console.log("column Win");
//                 return true;
//             }
//         }
//         if (squaresCopy[0] === player && squaresCopy[4] === player && squaresCopy[8] === player) {
//             console.log("Diagonal Win");
//             return true;
//         }
//         if (squaresCopy[2] === player && squaresCopy[4] === player && squaresCopy[6] === player) {
//             console.log("Diagonal Win");
//             return true;
//         }
//         return false;
//     }

//     render() {
//         return (<div>
//             <Grid squares={this.state.squares} isXNext={this.state.isXNext} status={this.state.status}
//                   handleClick={(index) => this.handleClick(index)}/>
//             <div>
//                 {
//                     this.state.gridList.map((item, index) => (<div>
//                         <button onClick={()=>{
//                             this.setState({
//                            squares:this.state.gridList[index] ,
//                             gridList:this.state.gridList.slice(0,index+1),
//                         })}}>
//                             move number {index}
//                         </button>
//                         </div>))
//                 }
//             </div>
//
//         </div>);
//     }
// }


function GameController(){
    const [squares,updateSquares]=useState(Array(9).fill(null));
    const [isXNext,updateX]=useState(true);
    const[status,updateStatus]=useState('Player X to move');
    const[gridList,updateGridList]=useState([Array(9).fill(null)]);
    const[sliceIndex,updateSliceIndex]=useState(1);
    const[buttonClicked,updateButtonClicked]=useState(false);
    const[win,updateWin]=useState(false);
    function checkForDraw(squaresCopy) {
        console.log("Checking for Draw");
        for (var i = 0; i < 9; i++) {
            if (squaresCopy[i] === null) {
                return false;
            }
        }
        return true;
    }

    function checkForWin(squaresCopy, player) {
        console.log("Checking forWin");
        if (player === null) {
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

    function handleClick(index) {

        let squaresCopy = squares.slice();
        console.log('squares Copy before move='+squaresCopy);
        let gridListCopy = buttonClicked?gridList.slice(0,sliceIndex):gridList.slice();
        updateButtonClicked(false);
        console.log('grid List copy='+gridListCopy);
        gridListCopy.push(squaresCopy);// gridList copy updated with old move
        console.log('grid List copy after pushing square copy='+gridListCopy);
        if (squaresCopy[index] !== null || win) {  //if a filled square is clicked nothing will happen
            return;
        }
        squaresCopy[index] = isXNext ? 'X' : 'O';// square updated
        if (checkForDraw(squaresCopy)) {
            updateSquares(squaresCopy);
            updateX( !isXNext);
            updateStatus('Draw!');
            updateGridList(gridListCopy);
        } else if (checkForWin(squaresCopy, squaresCopy[index])) {
            console.log("win detected!");
            updateSquares(squaresCopy);
            updateX( !isXNext);
            updateStatus('You Win!!');
            updateGridList(gridListCopy);
            updateWin(true);
        } else {
            console.log('grid List copy='+gridListCopy);
            updateSquares(squaresCopy);
            updateX( !isXNext);
            updateStatus(isXNext ? 'Player O to move' : 'Player X to move');
            updateGridList(gridListCopy);
        }
        console.log('squares Copy after move='+squaresCopy);
         console.log('grid List ='+gridList);
    }
    return (<div>
        <Grid squares={squares} status={status}
              handleClick={(index) => handleClick(index)}/>
        <div>
            {
                gridList.map((item) => (<div>
                    <button key={item} onClick={()=>{
                        updateButtonClicked(true);
                        updateSquares(item);
                        updateSliceIndex(gridList.indexOf(item)+1);

                    }}>
                        move number {gridList.indexOf(item)}
                    </button>
                </div>))
            }
        </div>

    </div>);
}
export default GameController