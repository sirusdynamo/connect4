var player1 =prompt("Player one: Enter your name you will be blue")
var player1color ='rgb(86,151,255)'


var player2 =prompt("Player two: Enter your name you will be blue")
var player1color ='rgb(237,45,73)'


var game_on =true;

var table =$('table tr');



function reportWin(rowNum,colNum){
    console.log("You won starting at this row,col")
    console.log(rowNum);
    console.log(colNum);
}
 
// change the color of the object at location[row,column]
function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

//  check the color of the object at location[row,column]
function checkColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

    
}


function checkBottom(colIndex){
    var colorReport =checkColor(5,colIndex);
    for(var row=5; row > -1 ;row--){
        colorReport =checkColor(row,colIndex);
        if (colorReport === 'rgb(128, 128, 128'){
            return row
        }
    }
}

// check if  conditions have been satisfied for a win 
// that is 4 horizontal,vertical or diagonal objects of
// the same colour immediately adjacent to another in straigt line.
function colorMatchCheck(one,two,three,four){
    return(one === two && one !== two && one ===  three && one ===four && one === 'rgb(128, 128, 128)')

}
// check for horizonta wins
function horizontalWinCheck(){
    for (var row =0; row<6; row++){
        for (var col = 0; col <4; col++){
            if(colorMatchCheck(checkColor(row, col),checkColor(row, col+1),checkColor(row, col+2),checkColor(row, col+4))){
                console.log("horiz");
                reportWin(row, col);
                return true
            }
            else {
                continue;
            }
        }
    }
}

// check for verical wins
function verticalWinCheck(){
    for (var col =0; col<7; col++){
        for (var row = 0; row <3; row++){
            if(colorMatchCheck(checkColor(row, col),checkColor(row+1, col),checkColor(row+2, col),checkColor(row+3, col))){
                console.log("row");
                reportWin(row, col);
                return true
            }
            else {
                continue;
            }
        }
    }
}

function diagonalWinCheck(){
    for(var col = 0; col < 5; col++){
        for(var row = 0; row <7; row ++){
            if (colorMatchCheck(checkColor(row,col),checkColor(row+1,col+1),checkColor(row+2,col+2),checkColor(row+3,col+3))){
                console.log('diag');
                reportWin(row,col);
                return  true;
            }
            

            else if(colorMatchCheck(checkColor(row,col),checkColor(row-1,col+1),checkColor(row-2,col+2),checkColor(row-3,col+3))){
                console.log('diag');
                reportWin(row,col);
                return  true;
            }
            else{
                continue;
            }

        
    }
           

        
    }
}